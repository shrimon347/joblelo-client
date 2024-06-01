import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../../components/shared/Navbar";
import Hero from "../addJobs/Hero";

import { useLoaderData } from "react-router-dom";

const UpdateJob = () => {
  const jobloader = useLoaderData();
  const {
    jobTitle,
    companyName,
    categorie,
    JobType,
    location,
    salary,
    skills,
    qualifications,
    experience,
    country,
    deadLine,
    rating,
    image,
    description,
    _id,
  } = jobloader;
  const [jobType, setJobType] = useState("Full Time");
  const [categories, setCategories] = useState("Web developer");
  const [deadline, setDeadline] = useState("");
  const handleJobPostupdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const jobTitle = form.job_title.value;
    const companyName = form.company_name.value;
    const categorie = categories;
    const JobType = jobType;
    const location = form.location.value;
    const salary = form.salary.value;
    const skills = form.skills.value;
    const qualifications = form.qualifications.value;
    const experience = form.experience.value;
    const country = form.country.value;
    const deadLine = deadline;
    const rating = form.rating.value;
    const image = form.photoUrl.value;
    const description = form.description.value;

    // console.log(jobTitle,companyName,categorie,JobType,location,salary,skills,qualifications,experience,country,deadLine,rating,image,description);
    const updateJobpost = {
      jobTitle,
      companyName,
      categorie,
      JobType,
      location,
      salary,
      skills,
      qualifications,
      experience,
      country,
      deadLine,
      rating,
      image,
      description,
    };
    console.log(updateJobpost);
    fetch(`https://joblelo-server.vercel.app/jobpost/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJobpost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Jobpost Updated Successfully ",
            icon: "success",
            confirmButtonText: "Done Update",
          });
        }
      });
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="">
        <div className="py-8 px-4 shadow-md mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-blue-900 text-center">
            Job Details Update
          </h2>
          <form onSubmit={handleJobPostupdate}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  job Title :
                </label>
                <input
                  type="text"
                  name="job_title"
                  className="input input-primary w-full"
                  placeholder="Web developer"
                  required
                  defaultValue={jobTitle}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Company Name :
                </label>
                <input
                  type="text"
                  name="company_name"
                  className="input input-primary w-full"
                  placeholder="Facebook"
                  required
                  defaultValue={companyName}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Categories :
                </label>
                <select
                  className="select select-primary w-full max-w-xs"
                  onChange={(e) => setCategories(e.target.value)}
                  defaultValue={categorie}
                >
                  <option>Web Designer</option>
                  <option>Backend Engineer</option>
                  <option>Graphics Designer</option>
                  <option>UI/UX Designer</option>
                  <option>Digital Marketing</option>
                  <option>Fontend Engineer</option>
                  <option>DevOps Engineer</option>
                  <option>Software Engineer</option>
                  <option>Androain developer</option>
                  <option>Data Analyst</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job Type :
                </label>
                <select
                  className="select select-primary w-full max-w-xs"
                  onChange={(e) => setJobType(e.target.value)}
                  defaultValue={JobType}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Office Work</option>
                  <option>Remote</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Salary :
                </label>
                <input
                  type="text"
                  name="salary"
                  className="input input-primary w-full"
                  placeholder="$200 - $500"
                  required
                  defaultValue={salary}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Skills :
                </label>
                <input
                  type="text"
                  name="skills"
                  className="input input-primary w-full"
                  placeholder="python, java, c++,figma"
                  required
                  defaultValue={skills}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Qualifications :
                </label>
                <input
                  type="text"
                  name="qualifications"
                  className="input input-primary w-full"
                  placeholder="qualifications"
                  required
                  defaultValue={qualifications}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Experience:
                </label>
                <input
                  type="text"
                  name="experience"
                  className="input input-primary w-full"
                  placeholder="experience"
                  required
                  defaultValue={experience}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Location :
                </label>
                <input
                  type="text"
                  name="location"
                  className="input input-primary w-full"
                  placeholder="location"
                  required
                  defaultValue={location}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Country:
                </label>
                <input
                  type="text"
                  name="country"
                  className="input input-primary w-full"
                  placeholder="Country"
                  required
                  defaultValue={country}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Apllication Deadline :
                </label>
                <input
                  type="date"
                  name="deadline"
                  className="input input-primary w-full" 
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                  defaultValue={deadLine}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Job Rating:
                </label>
                <input
                  type="text"
                  name="rating"
                  className="input input-primary w-full"
                  placeholder="rating out of 5"
                  required
                  defaultValue={rating}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Logo Url:
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input input-primary w-full"
                  placeholder="Photo url"
                  required
                  defaultValue={image}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Job Description:
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="input input-primary w-full"
                  placeholder="Write about job"
                  required
                  defaultValue={description}
                />
              </div>
            </div>
            <button
              type="submit"
              className=" px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium w-full  bg-blue-900  text-white  rounded-lg   hover:focus:bg-blue-700"
            >
              Update Post Job
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateJob;
