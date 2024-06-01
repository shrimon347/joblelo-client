import { useContext, useState } from "react";
import {AuthContext} from "../../provider/AuthProvider"
import Swal from 'sweetalert2'
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


const Form = () => {
  const [jobType, setJobType] = useState("Full Time");
  const [categories, setCategories] = useState("Web developer");
  const [deadline, setDeadline] = useState("");
  const {user} = useContext(AuthContext)
  const handleJobPost = (event) => {
    event.preventDefault();

    const form = event.target;

    const jobTitle = form.job_title.value;
    const companyName = form.company_name.value;
    const categorie = categories;
    const JobType = jobType
    const location = form.location.value;
    const salary = form.salary.value;
    const skills = form.skills.value;
    const qualifications = form.qualifications.value;
    const experience = form.experience.value;
    const country = form.country.value;
    const deadLine = deadline
    const rating = form.rating.value;
    const image = form.photoUrl.value;
    const description = form.description.value;
     // Generate the current timestamp
     const createdAtISO = new Date().toISOString();
     const createdAt = formatDate(createdAtISO);
     const jobApplicantsNumber = 0

  
    console.log(createdAt);
    // console.log(jobTitle,compnayName,categorie,JobType,location,salary,skills,qualifications,experience,country,address,rating,image,description);
    const newJobpost = {email:user.email,jobTitle,companyName,categorie,JobType,location,salary,skills,qualifications,experience,country,deadLine,rating,image,description,createdAt,jobApplicantsNumber}
    console.log(newJobpost);
    fetch('https://joblelo-server.vercel.app/jobpost', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newJobpost)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'New Job Post Added Successfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

        event.target.reset()
  };

  return (
    <div>
      <div className=" max-w-7xl mx-auto mt-10">
        <section className="">
          <div className="py-8 px-4 shadow-md mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-blue-900 text-center">
              Job Details
            </h2>
            <form onSubmit={handleJobPost}>
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
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Categories :
                  </label>
                  <select
                    className="select select-primary w-full max-w-xs"
                    onChange={(e) => setCategories(e.target.value)}
                    value={categories}
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
                    value={jobType}
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
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
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
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium w-full  bg-blue-900  text-white  rounded-lg   hover:focus:bg-blue-700"
              >
                Post Job
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form;
