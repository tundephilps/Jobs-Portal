import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import PersonalProfile from "./Pages/PersonalProfile";
import SignUp from "./Pages/SignUp";
import JobList from "./Pages/JobList";
import Terms from "./Pages/Terms";
import JobDetails from "./Pages/JobDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/PersonalProfile" element={<PersonalProfile />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/JobList" element={<JobList />} />

          <Route path="/Terms&Condition" element={<Terms />} />
          <Route path="/JobDetails/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
