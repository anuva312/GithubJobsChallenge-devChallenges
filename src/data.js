let jobList = [
  {
    id: "123456789",
    jobName: "Software Engineer",
    companyName: "Santa Monica",
    companyLogo: "",
    location: "New York",
    fullTime: false,
    postedDate: new Date("12/03/2021"),
  },
  {
    id: "1234567810",
    jobName: "Software Engineer",
    companyName: "Stankonia",
    companyLogo: "",
    location: "New York",
    fullTime: true,
    postedDate: new Date("11/28/2021"),
  },
  {
    id: "1234567811",
    jobName: "Software Engineer",
    companyName: "Ocean Avenue",
    companyLogo: "",
    location: "New York",
    fullTime: true,
    postedDate: new Date("12/08/2021"),
  },
  {
    id: "1234567812",
    jobName: "Software Engineer",
    companyName: "Tubthumper",
    companyLogo: "",
    location: "New York",
    fullTime: true,
    postedDate: new Date("12/12/2021"),
  },
  {
    id: "1234567813",
    jobName: "Software Engineer",
    companyName: "Wide Open Spaces",
    companyLogo: "",
    location: "New York",
    fullTime: false,
    postedDate: new Date(),
  },
];

export function getJobs() {
  return jobList;
}
