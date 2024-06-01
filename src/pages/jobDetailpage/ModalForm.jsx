/* eslint-disable react/prop-types */
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";
const ModalForm = ({id,deadline}) => {
  const {user} = useContext(AuthContext)
  const handleJobapplied = (event) => {
    event.preventDefault();

    const currentDate = new Date();
    const jobDeadline = new Date(deadline);

    // console.log(currentDate, jobDeadline);
    document.getElementById("my_modal_4").close();
    if (currentDate > jobDeadline) {
      Swal.fire({
        title: 'Expired!',
        text: 'The application deadline has passed.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      event.target.reset()
      return;
    }

    const form = event.target;
    const companyName = form.company_name.value
    const resumeLink = form.resumelink.value
    const newJobapply = {email:user.email,id,companyName,resumeLink}
    // console.log(newJobapply);
    fetch(`https://joblelo-server.vercel.app/appliedjobs?email=${user.email}&id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          Swal.fire({
            title: 'Already Applied!',
            text: 'You have already applied for this job.',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        } else {
          document.getElementById("my_modal_4").close();
          fetch('https://joblelo-server.vercel.app/appliedjobs', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newJobapply)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                Swal.fire({
                  title: 'Success!',
                  text: 'Job applied successfully.',
                  icon: 'success',
                  confirmButtonText: 'Done'
                });
              }
            });

          event.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="mt-5">
        <button
          className="btn bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md ms-2"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Apply Now
        </button>
        <dialog id="my_modal_4" className="modal -z-50">
          <div className="modal-box w-1/2 max-w-2xl">
            <p className="text-xl font-bold text-center mb-5 mt-5">Apply Job</p>
          <form  onSubmit={handleJobapplied}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                  disabled
                    type="email"
                    name="email"
                    value={user.email}
                    className="input input-primary w-full"
                    placeholder="Email"
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
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Resume Link:
                  </label>
                  <input
                    type="text"
                    name="resumelink"
                    className="input input-primary w-full"
                    placeholder="resume link"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium w-full  bg-blue-900  text-white  rounded-lg   hover:focus:bg-blue-700"
              >
                Apply
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
              <button className="btn bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white btn-sm btn-circle  absolute right-2 top-2">✕</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ModalForm;
