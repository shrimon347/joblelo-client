import { Link } from "react-router-dom";


const Explore = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-[100px]">
        <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <div className=" text-start relative z-1">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  Explore a job now!
                </h3>
                <p className="text-slate-400 max-w-xl">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5">
              <div className="ltr:text-right rtl:text-left relative z-1">
                <Link
                  className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 dark:border-blue-600 text-white rounded-md"
                  to="/alljobs"
                >
                  See Jobs
                </Link>
                <Link
                  className="btn bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md ms-2"
                  to=""
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -start-5">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <div className="absolute -bottom-5 -end-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
            </svg>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
