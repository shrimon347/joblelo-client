/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Hero from "./Hero";
import ModalForm from "./ModalForm";
const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    // Helper function to get day suffix (st, nd, rd, th)
    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // covers 11th-20th
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
  
    return `${day}${getDaySuffix(day)} ${month}, ${year}`;
  };
const JobDetail = () => {
  const job = useLoaderData();
  const {
    _id,
    jobTitle,
    createdAt,
    JobType,
    experience,
    qualifications,
    salary,
    location,
    deadLine,
    description,
  } = job;
  const deadline = formatDate(deadLine);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto mt-[100px]">
        <div className="">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <div className="p-6">
                  <h5 className="text-lg font-semibold">Job Information</h5>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Employee Type:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {JobType}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Location:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {location}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Job Type:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {jobTitle}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Experience:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {experience}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Qualifications:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {qualifications}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Salary:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {salary}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Date posted:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {createdAt}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div className="ms-4">
                        <p className="font-medium">Application Deadline:</p>
                        <span className="text-blue-600 font-medium text-sm">
                          {deadline}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-6">
              <h5 className="text-lg font-semibold">Job Description:</h5>
              {description}
              <ModalForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
