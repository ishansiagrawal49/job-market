import React from "react";
import ViewCandidateView from "pages/ViewCandidateView";
import OppurtunityPostingTwo from "pages/OppurtunityPostingTwo";
import OppurtunityPosting from "pages/OppurtunityPosting";
import Postoppurtunity from "pages/Postoppurtunity";
import OppurtunityPostingThree from "pages/OppurtunityPostingThree";
import PostoppurtunityOne from "pages/PostoppurtunityOne";
import DashboardOne from "pages/DashboardOne";
import Dashboard from "pages/Dashboard";
import PostoppurtunityTwo from "pages/PostoppurtunityTwo";
import OppurtunityPostingOne from "pages/OppurtunityPostingOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/oppurtunitypostingone"
          element={<OppurtunityPostingOne />}
        />
        <Route path="/postoppurtunitytwo" element={<PostoppurtunityTwo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardone" element={<DashboardOne />} />
        <Route path="/postoppurtunityone" element={<PostoppurtunityOne />} />
        <Route
          path="/oppurtunitypostingthree"
          element={<OppurtunityPostingThree />}
        />
        <Route path="/postoppurtunity" element={<Postoppurtunity />} />
        <Route path="/oppurtunityposting" element={<OppurtunityPosting />} />
        <Route
          path="/oppurtunitypostingtwo"
          element={<OppurtunityPostingTwo />}
        />
        <Route path="/viewcandidateview" element={<ViewCandidateView />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
