import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCards from "./components/JobCards";
import { getJobs } from "./data";
import "./App.css";

function App() {
  const [jobData, setJobData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const jobsList = getJobs();

  useEffect(() => {
    const todaysDate = new Date();
    const _jobs = jobsList.map((job) => {
      var Difference_In_Time = todaysDate.getTime() - job.postedDate.getTime();
      job["days_ago"] = Math.round(Difference_In_Time / (1000 * 3600 * 24));
      return job;
    });
    console.log(_jobs);
    setJobData(_jobs);
  }, [jobsList]);

  const handleOnChangeCheckbox = function () {
    if (!isChecked) {
      setJobData(jobsList.filter((job) => job.fullTime === true));
    } else {
      setJobData(jobsList);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      <header className="header">
        <span className="bold">Github</span>
        <span> Jobs</span>
      </header>
      <div className="banner">
        <div className="search-container"></div>
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkboxForFullTime"
              name="checkboxForFullTime"
              value="fullTimeIncluded"
              checked={isChecked}
              onChange={handleOnChangeCheckbox}
              className="checkbox"
            />
            <span className="label">Full Time</span>
          </div>
        </div>
        <div className="job-cards-list">
          {jobData?.map((job) => (
            <Link
              to={`/jobs?index=${job.id}`}
              style={{ textDecoration: "none" }}
              key={job.id}
            >
              <JobCards jobDetails={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
