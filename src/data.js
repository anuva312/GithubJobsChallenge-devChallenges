let jobList = [
  {
    id: "123456789",
    jobName: "FrontEnd Software Engineer",
    companyName: "Santa Monica",
    companyLogo: "",
    location: "New York",
    fullTime: false,
    postedDate: new Date("12/03/2021"),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "123456",
    country: "USA",
  },
  {
    id: "1234567810",
    jobName: "BackEnd Software Engineer",
    companyName: "Stankonia",
    companyLogo: "",
    location: "London",
    fullTime: true,
    postedDate: new Date("11/28/2021"),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "623457",
    country: "England",
  },
  {
    id: "1234567811",
    jobName: "FullStack Developer",
    companyName: "Ocean Avenue",
    companyLogo: "",
    location: "Boston",
    fullTime: true,
    postedDate: new Date("12/08/2021"),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "123459",
    country: "USA",
    keywords: [
      "usa",
      "boston",
      "full stack",
      "node js",
      "react",
      "ocean avenue",
    ],
  },
  {
    id: "1234567812",
    jobName: "FrontEnd Developer",
    companyName: "Tubthumper",
    companyLogo: "",
    location: "Dubai",
    fullTime: true,
    postedDate: new Date("12/12/2021"),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "873265",
    country: "UAE",
    keywords: ["uae", "dubai", "frontend", "react", "angular", "tubthumper"],
  },
  {
    id: "1234567813",
    jobName: "Analytics Engineer",
    companyName: "Wide Open Spaces",
    companyLogo: "",
    location: "Kolkata",
    fullTime: false,
    postedDate: new Date(),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "123321",
    country: "India",
    keywords: [
      "india",
      "kolkata",
      "data science",
      "analytics",
      "ai",
      "wide open spaces",
    ],
  },
  {
    id: "1234567814",
    jobName: "Data Scientist",
    companyName: "Wide Open Spaces",
    companyLogo: "",
    location: "Kolkata",
    fullTime: false,
    postedDate: new Date(),
    companyMailId: "compname@company.com",
    hrMailId: "hr@company.com",
    about:
      "cdncwidonvwp dsvmwpvnwpdnvdpvnw dmcpwnvenvpewnvpwnvepivnepinvpeivnpevn smcpamcpacmpcpkpkppqwpnvepw\n owncowiecwioenciwnciwnciwnwoncwioeniwnioewnvoinvinviwoncoinwsic \n ncoiwn coiwenciowencvioewnioncew oinfbvufhgierhowind knvkansc jqsnjnxin aocdpvnwiniwd wkdnwk",
    zipCode: "123321",
    country: "India",
    keywords: [
      "india",
      "kolkata",
      "data science",
      "machine learning",
      "ai",
      "wide open spaces",
    ],
  },
];

export function getJobs() {
  return jobList;
}

export function getJobById(id) {
  return jobList.find((job) => job.id === id);
}
