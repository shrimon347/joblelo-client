import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleJob from "./SingleJob";
const TabJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobpost")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleJobFilter = (filter) => {
    let filtered;
    if (filter === "all") {
      filtered = jobs;
    } else if (filter === "remote") {
      filtered = jobs.filter((job) => job.JobType === "Remote");
    } else if (filter === "fulltime") {
      filtered = jobs.filter((job) => job.JobType === "Full Time");
    } else if (filter === "part-time") {
      filtered = jobs.filter((job) => job.JobType === "Part Time");
    } else if (filter === "onsite") {
      filtered = jobs.filter((job) => job.JobType === "Office Work");
    }
    setFilteredJobs(filtered);
    // console.log(jobs);
  };

  return (
    <div className="max-w-7xl mx-auto mt-[200px]">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
          Popular Jobs
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => handleJobFilter("all")}>
              {" "}
              <span className="text-blue-900 font-bold ">All Job</span>{" "}
            </Tab>
            <Tab onClick={() => handleJobFilter("onsite")}>
              {" "}
              <span className="text-blue-900 font-bold ">On Site Job</span>{" "}
            </Tab>
            <Tab onClick={() => handleJobFilter("remote")}>
              {" "}
              <span className="text-blue-900 font-bold ">Remote Job</span>{" "}
            </Tab>
            <Tab onClick={() => handleJobFilter("fulltime")}>
              {" "}
              <span className="text-blue-900 font-bold ">
                Full Time Job
              </span>{" "}
            </Tab>
            <Tab onClick={() => handleJobFilter("part-time")}>
              <span className="text-blue-900 font-bold ">Part Time Job</span>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
              {jobs.map((job) => (
                <SingleJob job={job} key={job._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
              {filteredJobs.map((job) => (
                <SingleJob job={job} key={job._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
              {filteredJobs.map((job) => (
                <SingleJob job={job} key={job._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
              {filteredJobs.map((job) => (
                <SingleJob job={job} key={job._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
              {filteredJobs.map((job) => (
                <SingleJob job={job} key={job._id} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabJob;
