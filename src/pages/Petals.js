import React, { useMemo } from "react";

const PETAL_COUNT = 16;
const PETAL_GLYPHS = ["🌸", "✿", "❀"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        size: randomBetween(14, 26),
        fallDuration: randomBetween(9, 16),
        swayDuration: randomBetween(3, 6),
        delay: randomBetween(0, 14),
        glyph: PETAL_GLYPHS[Math.floor(Math.random() * PETAL_GLYPHS.length)],
        opacity: randomBetween(0.5, 0.9),
      })),
    []
  );

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: `${petal.fallDuration}s, ${petal.swayDuration}s`,
            animationDelay: `${-petal.delay}s, ${-petal.delay}s`,
          }}
        >
          {petal.glyph}
        </span>
      ))}
    </div>
  );
}
