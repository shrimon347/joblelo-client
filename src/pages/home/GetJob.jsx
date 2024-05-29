import { Link } from "react-router-dom";

const GetJob = () => {
  return (
    <div className="mt-[200px] bg-[url('/src/assets/hero/bg2.jpg')]">
     <section className="  mx-auto py-20 w-full table relative  bg-top bg-no-repeat bg-cover">
  <div className="absolute inset-0 bg-slate-900/70"></div>
  <div className=" mx-auto relative max-w-7xl">
    <div className="grid grid-cols-1 text-center">
      <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">
        Get the job that&apos;s right for you
      </h3>
      <p className="text-white/80 max-w-xl mx-auto">
        Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <Link
        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 mx-auto mt-10"
        href="/"
      >  
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default GetJob;
