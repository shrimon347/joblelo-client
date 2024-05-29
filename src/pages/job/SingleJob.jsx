/* eslint-disable react/prop-types */
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleJob = ({ job }) => {
  const { _id, jobTitle, companyName, image, salary, rating, location,JobType,createdAt,jobApplicantsNumber} = job;
  return (
    <div>
      <div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src={image} className="size-8" alt="" />
            </div>
            <div className="ms-3">
              <a
                className="block text-[16px] font-semibold hover:text-blue-600 transition-all duration-500"
                href="/employer-detail/1"
              >
                {companyName}
              </a>
              <span className="block text-sm text-slate-400">{createdAt}</span>
            </div>
          </div>
          <Link
            className="btn btn-icon btn-lg rounded-full bg-blue-600/5 group-hover:bg-blue-600 border border-slate-100 dark:border-slate-800 text-blue-600 group-hover:text-white"
            to={`/job-detail/${_id}`}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>
        <div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
          <div>
            <a
              className="text-lg font-semibold hover:text-emerald-600"
              href="/job-detail-one/1"
            >
              {jobTitle}
            </a>
            <p className="text-blue-900 font-bold mt-1">{JobType}</p>
            <p className="text-blue-900 font-bold mt-1">Job Applicants Number : {jobApplicantsNumber}</p>
          </div>
          <p className="text-slate-400 lg:mt-0 mt-4 flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[20px] text-blue-600 me-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
              <path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path>
            </svg>
            {salary}
          </p>
        </div>
        <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
          <div className="items-center flex">
            <span className="inline-flex items-center font-semibold">
              <RiVerifiedBadgeFill className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
              Verified
            </span>
            <ul className="list-none inline-flex items-center ms-1 text-yellow-400 space-x-0.5 ">
            <FaStar />
              <li className="inline text-slate-400 font-semibold">{rating}</li>
            </ul>
          </div>
          <span className="inline-flex items-center me-1 text-slate-400">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="text-[18px] text-slate-900 dark:text-white me-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
            </svg>
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
