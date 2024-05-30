import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Explore from "../../components/shared/Explore";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Support from "../../components/shared/Support";
import Herojobs from "./Herojobs";
import Jobpage from "./JobPage";

const AllJobs = () => {
  const alljobs = useLoaderData();
  const [country, setCountry] = useState("");
  const [jobType, setJobType] = useState("");

  const [filteredJobs, setFilteredJobs] = useState(alljobs);

  const handleJobFilter = (e) => {
    e.preventDefault();
    const filtered = alljobs.filter((job) => {
      return (
        (country === "" || job.country === country) &&
        (jobType === "" || job.JobType === jobType)
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div>
      <Navbar />
      <Herojobs />

      <div className="max-w-7xl mx-auto mt-[50px]">
        <div className="bg-white dark:bg-slate-800 border-0 shadow rounded p-3 mt-10">
          <form onSubmit={handleJobFilter}>
            <div className="registration-form text-dark text-start">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-6">
                <select
                  className="select select-primary w-full"
                  onChange={(e) => setJobType(e.target.value)}
                  value={jobType}
                >
                  <option value="">All Job Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Office Work">Office Work</option>
                  <option value="Remote">Remote</option>
                </select>
                <select
                  className="select select-primary w-full"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="Dubai">Dubai</option>
                </select>
                <button type="submit" className="bg-blue-900 p-3 text-white">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-[30px] mt-[30px]">
          {filteredJobs.map((job) => (
            <Jobpage key={job._id} job={job} />
          ))}
        </div>
        <Support />
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default AllJobs;
