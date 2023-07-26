import React from "react";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";
import Job from "../components/Jobs/Job";
import JobCards from "../components/Jobs/JobCards";
import Search from "../components/Jobs/Search";
import Updates from "../components/Jobs/Updates";

const JobList = (props) => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto bg-white">
        <Search />
        <JobCards />
        <Updates />
      </div>
      <Footer />
    </>
  );
};

export default JobList;
