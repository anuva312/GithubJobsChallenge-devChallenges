import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import JobCards from "./components/JobCards";
import { getJobs } from "./data";
import "./App.css";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border: "none",
    flexDirection: "row-reverse",
  }),
  groupHeading: (provided) => ({
    ...provided,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#334680",
  }),
};

function App() {
  const [jobData, setJobData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [titles, setTitles] = useState([]);
  const [search, setSearch] = useState();
  const [groupedOptions, setGroupedOptions] = useState();
  const [selectedFilter, setSelectedFilter] = useState({});
  const [searchKeyword, setSearchKeyword] = useState({});
  const jobsList = getJobs();

  useEffect(() => {
    const todaysDate = new Date();
    let _titles = [];
    let cityOptions = [];
    let zipCodeOptions = [];
    let countryOptions = [];
    const _jobs = jobsList.map((job) => {
      var Difference_In_Time = todaysDate.getTime() - job.postedDate.getTime();
      job["days_ago"] = Math.round(Difference_In_Time / (1000 * 3600 * 24));
      _titles.push(job.jobName);
      cityOptions.push(job.location);
      zipCodeOptions.push(job.zipCode);
      countryOptions.push(job.country);
      return job;
    });
    _titles = [...new Set(_titles)].map((option) => ({
      label: option,
      value: option,
    }));
    cityOptions = [...new Set(cityOptions)].map((option) => ({
      label: option,
      value: option,
      type: "location",
    }));
    zipCodeOptions = [...new Set(zipCodeOptions)].map((option) => ({
      label: option,
      value: option,
      type: "zipCode",
    }));
    countryOptions = [...new Set(countryOptions)].map((option) => ({
      label: option,
      value: option,
      type: "country",
    }));
    console.log(_jobs);
    setTitles(_titles);
    setGroupedOptions([
      {
        label: "City",
        options: cityOptions,
      },
      {
        label: "Zip Code",
        options: zipCodeOptions,
      },
      {
        label: "Country",
        options: countryOptions,
      },
    ]);
    setJobData(_jobs);
  }, [jobsList]);

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
        _jobData = _jobData.filter(
          (job) => job.jobName === searchKeyword.value
        );
      }
    }
    if (selectedFilter.label) {
      _jobData = _jobData.filter(
        (job) => job[selectedFilter.type] === selectedFilter.value
      );
    }
    setJobData(_jobData);
  }, [isChecked, searchKeyword, selectedFilter, jobsList]);

  const handleOnChangeCheckbox = function () {
    setIsChecked(!isChecked);
  };

  const handleClickSearch = function () {
    if (search)
      if (search.__isNew__) {
        setSearchKeyword({ key: "keywords", value: search.value });
      } else {
        setSearchKeyword({ key: search.label, value: search.value });
      }
  };

  const handleOnChangeSearch = function (option) {
    console.log("Inside OnChange", option);
    setSearch(option);
  };

  const handleOnChangeFilter = function (option) {
    console.log("Inside OnChange", option);
    setSelectedFilter(option);
  };

  const DropdownIndicatorCreatable = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <span className="material-icons">work_outline</span>
      </components.DropdownIndicator>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <span className="material-icons">public</span>
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
            styles={customStyles}
            onChange={handleOnChangeSearch}
            formatCreateLabel={(value) => `Search for "${value}"`}
            components={{
              DropdownIndicator: DropdownIndicatorCreatable,
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

            <Select
              className="select-box search-location-box"
              styles={customStyles}
              onChange={handleOnChangeFilter}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
              name="search-keyword"
              options={groupedOptions}
              placeholder="City, zip code or country"
            ></Select>
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
            <div>Sorry... No jobs found that match the search criteria</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
