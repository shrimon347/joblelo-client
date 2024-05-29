const ModalForm = () => {
  return (
    <div>
      <div className="mt-5">
        <button
          className="btn bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md ms-2"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Apply Now
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-1/2 max-w-2xl">
            <p className="text-xl font-bold text-center mb-5 mt-5">Apply Job</p>
          <form >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-primary w-full"
                    placeholder="Email"
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
