import { useContext, useEffect, useState } from "react";
import Explore from "../../components/shared/Explore";
import Navbar from "../../components/shared/Navbar";
import Support from "../../components/shared/Support";
import { AuthContext } from "../../provider/AuthProvider";
import JobPage from "../alljobpage/JobPage";
import HeroApply from "./HeroApply";
import Footer from "../../components/shared/Footer";

const Applied = () => {
  const { user } = useContext(AuthContext);
  const [country, setCountry] = useState("");
  const [jobType, setJobType] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredapplyJobs, setFilteredapplyJobs] = useState(filteredJobs);



  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const res = await fetch(
        `http://localhost:5000/appliedjobs?email=${user.email}`
      );
      const data = await res.json();
      setAppliedJobs(data);
    };

    const fetchJobs = async () => {
      const res = await fetch(`http://localhost:5000/jobpost`);
      const data = await res.json();
      setJobs(data);
    };

    fetchAppliedJobs();
    fetchJobs();
  }, [user.email]);

  useEffect(() => {
    const filterJobs = () => {
      const appliedJobIds = appliedJobs.map((job) => job.id);
      const filtered = jobs.filter((job) => appliedJobIds.includes(job._id));
      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [appliedJobs, jobs]);


  const handleJobFilter = (e) => {
    e.preventDefault();
    const filtered = filteredJobs.filter((job) => {
      return (
        (country === "" || job.country === country) &&
        (jobType === "" || job.JobType === jobType)
      );
    });

    setFilteredapplyJobs(filtered);
  };

  return (
    <div>
      <Navbar />
      <HeroApply />
      <div className="max-w-7xl mx-auto">
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
        {filteredapplyJobs.length > 0 ? (
            filteredapplyJobs.map((job) => (
              <JobPage key={job._id} job={job} />
            ))
          ) : (
            filteredJobs.map((job) => (
              <JobPage key={job._id} job={job} />
            ))
          )}
        </div>
        <Support />
        <Explore />
        
      </div>
      <Footer />
    </div>
  );
};

export default Applied;
