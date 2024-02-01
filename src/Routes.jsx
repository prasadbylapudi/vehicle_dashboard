import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Trasactions = React.lazy(() => import("pages/Trasactions"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<Trasactions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
