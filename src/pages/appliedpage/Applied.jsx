import { useContext, useEffect, useState } from "react";
import Explore from "../../components/shared/Explore";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Support from "../../components/shared/Support";
import { AuthContext } from "../../provider/AuthProvider";
import JobPage from "../alljobpage/JobPage";
import HeroApply from "./HeroApply";
import axios from "axios";

const Applied = () => {
  const { user } = useContext(AuthContext);
  const [country, setCountry] = useState("");
  const [jobType, setJobType] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredapplyJobs, setFilteredapplyJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      setLoading(true);
      const res = await axios.get(`https://joblelo-server.vercel.app/appliedjobs?email=${user.email}`,{withCredentials:true});
      setAppliedJobs(res.data);
    };

    const fetchJobs = async () => {
      setLoading(true);
      const res = await fetch(`https://joblelo-server.vercel.app/jobpost`);
      const data = await res.json();
      setJobs(data);
    };

    fetchAppliedJobs().then(fetchJobs).finally(() => setLoading(false));
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
    setLoading(true);
    const filtered = filteredJobs.filter((job) => {
      return (
        (country === "" || job.country === country) &&
        (jobType === "" || job.JobType === jobType)
      );
    });

    setFilteredapplyJobs(filtered);
    setLoading(false);
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
                  <option value="">All Countries</option>
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
          {loading ? (
            <div className="text-center mt-10">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <>
              {filteredapplyJobs.length > 0
                ? filteredapplyJobs.map((job) => (
                    <JobPage key={job._id} job={job} />
                  ))
                : filteredJobs.map((job) => <JobPage key={job._id} job={job} />)}
            </>
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
  