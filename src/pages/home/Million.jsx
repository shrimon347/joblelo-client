import img1 from "../../assets/hero/1.jpg"
import img3 from "../../assets/hero/3.jpg"
const Million = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[250px]">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="relative">
            <div className="relative">
              <img
                src={img1}
                className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
              
            </div>
            <div className="absolute md:-end-5 end-0 -bottom-16">
              <img
                src={img3}
                className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
          <div className="lg:ms-5">
            <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">
              Millions of jobs. <br /> Find the one that&apos;s right for you.
            </h3>
            <p className="text-slate-400 max-w-xl">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-blue-600 text-xl me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
                Digital Marketing Solutions for Tomorrow
              </li>
              <li className="mb-1 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-blue-600 text-xl me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>{" "}
                Our Talented &amp; Experienced Marketing Agency
              </li>
              <li className="mb-1 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-blue-600 text-xl me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>{" "}
                Create your own skin to match your brand
              </li>
            </ul>
            <div className="mt-6">
              <a
                className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white mt-2 rounded-md inline-flex items-center"
                href="/"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>{" "}
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Million;
