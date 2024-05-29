import img1 from "../../assets/hero/1.jpg";
import img2 from "../../assets/hero/2.jpg";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className=" md:h-screen h-auto items-center flex relative overflow-hidden">
        <div className="relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
              <div className="lg:me-8">
                <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">
                  Find the
                  <span className="before:block before:absolute before:-inset-2 ml-3 before:-skew-y-6 before:bg-blue-900 relative inline-block">
                    <span className="relative text-white font-bold">
                      Best Job
                    </span>
                  </span>
                  <br /> offer for you.
                </h4>
                <p className="text-slate-400 text-lg max-w-xl">
                  Find Jobs, Employment &amp; Career Opportunities. Some of the
                  companies we &amp ve helped recruit excellent applicants over
                  the years.
                </p>
                <div className="bg-white dark:bg-slate-800 border-0 shadow rounded p-3 mt-4">
                  <form action="#">
                    <div className="registration-form text-dark text-start">
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-6">
                        <label className="input input-primary flex items-center gap-2 ">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                          />
                        </label>
                        <select className="select select-primary w-full ">
                          <option disabled value="">
                            Select
                          </option>
                          <option>Bangladesh</option>
                          <option>India</option>
                          <option>Canada</option>
                          <option>Italy</option>
                          <option>Usa</option>
                          <option>Thailand</option>
                          <option>China</option>
                          <option>Dubai</option>
                        </select>
                        <button className="bg-blue-900 p-3 text-white">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mt-2">
                  <span className="text-slate-400">
                    <span className="text-dark">Popular Searches :</span>{" "}
                    Designer, Developer, Web, IOS, PHP Senior Engineer
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 md:col-span-6">
              <div className="relative">
                <div className="relative ml-16">
                  <img src={img1} className="rounded-md" alt="" />
                </div>
                <div className="absolute top-[13rem] ">
                  <img src={img2} className="w-[23rem] border-4 dark:border-slate-900" alt="" />
                </div>
                <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[1500px] w-[1400px] bg-gradient-to-tl to-blue-600/5 via-blue-600/50 from-blue-600 bottom-1/2 translate-y-1/2 start-1/2  -z-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
