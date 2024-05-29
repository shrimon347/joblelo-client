import { Link } from "react-router-dom";
const Herojobs = () => {
  return (
    <div>
      <section className="relative table w-full py-36 bg-[url('src/assets/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-blue-900/90"></div>
        <div className="">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide flex justify-center leading-snug z-10 font-medium text-white">
              Job Post
            </h3>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">JobLeLo &gt; </Link>
            </li>

            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              All Job Post
            </li>
          </ul>
        </div>
      </section>

     
    </div>
  );
};

export default Herojobs;
