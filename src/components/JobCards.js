import React from "react";
import "./JobCards.css";

export default function JobCards({ jobDetails }) {
  return (
    <div className="job-container">
      <div className="logo-container">
        <img src={jobDetails.companyLogo} alt="company-logo"></img>
      </div>
      <div className="job-details-container">
        <div className="company-name">{jobDetails.companyName}</div>
        <div className="job-posting">{jobDetails.jobName}</div>
        <div className="row-container">
          {jobDetails.fullTime ? (
            <button
              id={`${jobDetails.id}-full-time-btn`}
              name="full-time-button"
              className="full-time-btn"
            >
              Full Time
            </button>
          ) : (
            <div className="placeholder-for-btn"></div>
          )}
          <div className="place-date-container">
            <div className="material-icon-container">
              <span className="material-icons">public</span>
              <span className="label">{jobDetails.location}</span>
            </div>
            <div className="material-icon-container">
              <span className="material-icons">schedule</span>
              <span className="label">
                {jobDetails.days_ago
                  ? `${jobDetails.days_ago} days ago`
                  : "Today"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
