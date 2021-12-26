import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getJobById } from "../data";
import "../App.css";

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    setJobDetails(getJobById(searchParams.get("index")));
  }, [searchParams]);
  return (
    <div className="App">
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <header className="header">
          <span className="bold header-items">Github</span>
          <span className="header-items"> Jobs</span>
        </header>
      </Link>
      <div className="main-content">
        <div className="sidebar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="back-btn-container links">
              <span className="material-icons">west</span>
              Back to search
            </div>
          </Link>
          <div className="how-to-apply">How To Apply</div>
          <div className="email-desc">
            Please email a copy of your resume and online portfolio to{" "}
            <span className="links">{jobDetails?.companyMailId}</span>
            {" & CC "}
            <span className="links">{jobDetails?.hrMailId}</span>
          </div>
        </div>
        <div className="job-contents">
          <div className="flex">
            <div className="job-title">{jobDetails?.jobName}</div>
            {jobDetails?.fullTime ? (
              <button
                id={`${jobDetails?.id}-full-time-btn`}
                name="full-time-button"
                className="full-time-btn"
              >
                Full Time
              </button>
            ) : null}
          </div>
          <div className="place-container">
            <div className="material-icon-container">
              <span className="material-icons">public</span>
              <span className="label">{jobDetails?.location}</span>
            </div>
          </div>
          <div className="company-details flex">
            <div className="company-logo">
              <img
                src={`${process.env.PUBLIC_URL}${jobDetails?.companyLogo}`}
                alt="logo"
              ></img>
            </div>
            <div className="company-place-name-container">
              <div className="company-name">{jobDetails?.companyName}</div>
              <div className="date-container">
                <div className="material-icon-container">
                  <span className="material-icons">schedule</span>
                  <span className="label">
                    {jobDetails?.days_ago
                      ? `${jobDetails?.days_ago} days ago`
                      : "Today"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="job-description">{jobDetails?.about}</div>
        </div>
      </div>
    </div>
  );
}
