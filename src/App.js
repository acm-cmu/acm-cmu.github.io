import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome";
import About from "./pages/aboutus";
import Events from "./pages/events";
import Sponsors from "./pages/sponsors";
import Layout from "./components/layout";
import HackCMU from "./pages/hackcmu";
import HackberryPi from "./pages/hackberrypi";
import HackCMU2026 from "./pages/hackcmu2026";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route
          path="/welcome"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/sponsors"
          element={
            <Layout>
              <Sponsors />
            </Layout>
          }
        />
        <Route
          path="/hackcmu"
          element={
            <Layout>
              <HackCMU />
            </Layout>
          }
        />
        <Route
          path="/hackberrypi"
          element={
            <Layout>
              <HackberryPi />
            </Layout>
          }
        />
        <Route
          path="/hackcmu2026"
          element={
            <Layout>
              <HackCMU2026 />
            </Layout>
          }
        />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
