import { Routes, Route, HashRouter } from "react-router-dom";
import Welcome from "./pages/welcome";
import About from "./pages/aboutus";
import Events from "./pages/events";
import Sponsors from "./pages/sponsors";
import Layout from "./components/layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Welcome />{" "}
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
      </Routes>
    </HashRouter>
  );
}

export default App;
