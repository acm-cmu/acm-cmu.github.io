import React, { useEffect, useRef, useState } from "react";

const BIN_COUNT = 40;
const SPAWN_INTERVAL_MS = 1200;
const MAX_PETALS = 500;
const PETAL_GLYPHS = ["🌸", "✿", "❀"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Reads a petal's actual current on-screen offset (whether it's still
// mid-fall or already landed) so the gust can pick it up from exactly
// where it is instead of snapping it somewhere else first.
function currentTransformOffset(node) {
  const value = getComputedStyle(node).transform;
  if (!value || value === "none") return { x: 0, y: 0, deg: 0 };
  const matrix = new DOMMatrixReadOnly(value);
  const deg = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
  return { x: matrix.m41, y: matrix.m42, deg };
}

// Petals spawn from the top, fall once into a resting spot near the
// bottom, and stay there permanently -- building up into a pile the
// longer you stay on the page. Once the pile fills up, a gust of wind
// picks up every petal (falling or already landed) and carries it off.
export default function Petals() {
  const [petals, setPetals] = useState([]);
  const binHeights = useRef(new Array(BIN_COUNT).fill(0));
  const nextId = useRef(0);
  const gustingRef = useRef(false);
  const petalNodes = useRef(new Map());
  const mountedRef = useRef(true);

  const registerNode = (id) => (el) => {
    if (el) petalNodes.current.set(id, el);
    else petalNodes.current.delete(id);
  };

  const startGust = () => {
    gustingRef.current = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      binHeights.current = new Array(BIN_COUNT).fill(0);
      setPetals([]);
      gustingRef.current = false;
      return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const animations = Array.from(petalNodes.current.values()).map((node) => {
      const { x, y, deg } = currentTransformOffset(node);
      const currentOpacity = getComputedStyle(node).opacity;
      const frozenTransform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;
      const wasFalling = node
        .getAnimations()
        .some((a) => a.playState === "running");

      // Pin the petal's real current position via inline style *before*
      // cancelling its fall animation, so there's nothing for it to
      // snap back to -- otherwise cancelling reverts it to .petal's
      // base CSS transform (off-screen at the top) for a frame.
      node.style.transform = frozenTransform;
      node.getAnimations().forEach((a) => a.cancel());

      const leftPercent = parseFloat(node.style.left) || 0;
      // Petals still in the air are already caught by the wind, so
      // barely wait; the landed pile sweeps left-to-right a bit slower.
      const delayMs = wasFalling
        ? randomBetween(0, 60)
        : (leftPercent / 100) * 350 + randomBetween(0, 120);
      const gustX = randomBetween(viewportWidth * 1.4, viewportWidth * 2.4);
      const gustY = -viewportHeight * randomBetween(0.5, 0.95);
      const jerkRotate = deg + randomBetween(20, 50);
      const finalRotate = deg + randomBetween(420, 800);

      return node.animate(
        [
          {
            transform: frozenTransform,
            opacity: currentOpacity,
          },
          {
            transform: `translate(${x + gustX * 0.12}px, ${y - 24}px) rotate(${jerkRotate}deg)`,
            opacity: 1,
            offset: 0.18,
          },
          {
            transform: `translate(${x + gustX}px, ${y + gustY}px) rotate(${finalRotate}deg)`,
            opacity: 0,
          },
        ],
        {
          duration: randomBetween(3200, 4200),
          delay: delayMs,
          easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          fill: "forwards",
        }
      );
    });

    Promise.all(animations.map((a) => a.finished))
      .catch(() => {
        // An animation was cancelled (e.g. the page was navigated away
        // from mid-gust) -- nothing to finish, just stop tracking it.
      })
      .then(() => {
        if (!mountedRef.current) return;
        binHeights.current = new Array(BIN_COUNT).fill(0);
        setPetals([]);
        gustingRef.current = false;
      });
  };

  useEffect(() => {
    mountedRef.current = true;

    const interval = setInterval(() => {
      if (gustingRef.current) return;

      setPetals((prev) => {
        if (prev.length >= MAX_PETALS) {
          if (!gustingRef.current) {
            startGust();
          }
          return prev;
        }

        const bin = Math.floor(Math.random() * BIN_COUNT);
        const size = randomBetween(16, 27);

        // Look at this bin and its neighbors so petals can nestle in
        // and overlap the pile instead of stacking in rigid columns.
        const neighborBins = [bin - 1, bin, bin + 1].filter(
          (b) => b >= 0 && b < BIN_COUNT
        );
        const localHeight = Math.max(
          ...neighborBins.map((b) => binHeights.current[b])
        );
        const overlap = randomBetween(0.35, 0.8) * size;
        const bottom = Math.max(0, localHeight - overlap);

        binHeights.current[bin] = Math.max(
          binHeights.current[bin],
          bottom + size * randomBetween(0.4, 0.6)
        );

        const petal = {
          id: nextId.current++,
          left: ((bin + randomBetween(0.1, 0.9)) / BIN_COUNT) * 100,
          bottom,
          size,
          rotate: randomBetween(0, 360),
          duration: randomBetween(4, 8),
          glyph: PETAL_GLYPHS[Math.floor(Math.random() * PETAL_GLYPHS.length)],
          opacity: randomBetween(0.6, 0.95),
        };

        return [...prev, petal];
      });
    }, SPAWN_INTERVAL_MS);

    return () => {
      mountedRef.current = false;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          ref={registerNode(petal.id)}
          className="petal"
          style={{
            left: `${petal.left}%`,
            bottom: `${petal.bottom}px`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: `${petal.duration}s`,
            "--petal-rotate": `${petal.rotate}deg`,
          }}
        >
          {petal.glyph}
        </span>
      ))}
    </div>
  );
}
