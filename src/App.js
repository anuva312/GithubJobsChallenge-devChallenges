import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import JobCards from "./components/JobCards";
import { getJobs } from "./data";
import "./App.css";

// const filterOptions = ["City", "Zip Code", "Country"];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border: "none",
    flexDirection: "row-reverse",
  }),
};

function App() {
  const [jobData, setJobData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [titles, setTitles] = useState([]);
  const [search, setSearch] = useState();
  const [selectedFilter, setSelectedFilter] = useState({});
  const [searchKeyword, setSearchKeyword] = useState({});
  const jobsList = getJobs();

  useEffect(() => {
    const todaysDate = new Date();
    let _titles = [];
    const _jobs = jobsList.map((job) => {
      var Difference_In_Time = todaysDate.getTime() - job.postedDate.getTime();
      job["days_ago"] = Math.round(Difference_In_Time / (1000 * 3600 * 24));
      _titles.push({ label: job.jobName, value: job.id });
      return job;
    });
    console.log(_jobs);
    setTitles(_titles);
    setJobData(_jobs);
  }, [jobsList]);

  // useEffect(() => {
  //   if (jobData?.length) {
  //     let options = [];
  //     switch (selectedFilter) {
  //       case "City":
  //         options = jobData.map((job) => job.location);
  //         break;
  //       case "Zip Code":
  //         options = jobData.map((job) => job.zipCode);
  //         break;
  //       case "Country":
  //         options = jobData.map((job) => job.country);
  //         break;
  //       default:
  //         options = jobData.map((job) => job.location);
  //         break;
  //     }
  //     setSelectedFilterOptions([...new Set(options)]);
  //   }
  // }, [jobData, selectedFilter]);

  useEffect(() => {
    let _jobData = isChecked
      ? jobsList.filter((job) => job.fullTime === true)
      : jobsList;
    if (searchKeyword.key) {
      if (searchKeyword.key === "keywords") {
        _jobData = _jobData.filter(
          (job) =>
            job.keywords &&
            job.keywords.find(
              (key) => key === searchKeyword.value.toLowerCase()
            )
        );
      } else {
        _jobData = _jobData.filter((job) => job.id === searchKeyword.value);
      }
    }
    setJobData(_jobData);
  }, [isChecked, searchKeyword, selectedFilter, jobsList]);

  const handleOnChangeCheckbox = function () {
    setIsChecked(!isChecked);
  };

  const handleClickSearch = function () {
    if (search.__isNew__) {
      setSearchKeyword({ key: "keywords", value: search.value });
    } else {
      setSearchKeyword({ key: search.label, value: search.value });
    }
  };

  const handleOnChangeSearch = function (e) {
    console.log("Inside OnChange", e);
    setSearch(e);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <span className="material-icons">work_outline</span>
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="App">
      <header className="header">
        <span className="bold">Github</span>
        <span> Jobs</span>
      </header>
      <div className="banner">
        <div className="search-container">
          <CreatableSelect
            className="select-box"
            classNamePrefix="select-box-items"
            styles={customStyles}
            onChange={handleOnChangeSearch}
            formatCreateLabel={(value) => `Search for "${value}"`}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
            name="search-keyword"
            options={titles.length ? titles : []}
            placeholder="Title, companies, expertise, benefits or other keywords"
          ></CreatableSelect>
          <button
            className="search-button"
            id="search-button"
            onClick={handleClickSearch}
          >
            Search
          </button>
        </div>
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
          <div className="search-location-container">
            <div className="search-location-heading">LOCATION</div>

            <div className="search-location-type">City</div>
          </div>
        </div>
        {jobData?.length ? (
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
        ) : (
          <div className="placeholder-job-cards">
            <div>Sorry...No jobs that match the search criteria</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
