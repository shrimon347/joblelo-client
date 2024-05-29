/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const JobPage = ({job}) => {
    const { _id, companyName, salary, location, JobType, createdAt, image,deadLine } = job;
    return (
      <div>
        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src={image} className="size-8" alt="" />
            </div>
            <Link
              className="text-lg hover:text-blue-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
              href="/job-detail-two"
            >
              {companyName}
              
            </Link>
            <p className="text-blue-900 font-medium">Application Deadline : {deadLine}</p>
          </div>
          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block">
              <span className="bg-blue-600/10 inline-block text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                {JobType}
              </span>
            </span>
            <span className="flex items-center text-slate-400 text-sm md:mt-1 mt-0">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="me-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
              </svg>{" "}
             {createdAt}
            </span>
          </div>
          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400 flex items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {location}
            </span>
            <span className="block font-semibold md:mt-1 mt-0">
             {salary}
            </span>
          </div>
          <div className="md:mt-0 mt-4">
            <Link
              className="btn btn-icon btn-lg rounded-full bg-blue-600/5 group-hover:bg-blue-600 border border-blue-100 dark:border-blue-800 text-blue-600 group-hover:text-white"
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
        </div>
      </div>
    );
}

export default JobPage