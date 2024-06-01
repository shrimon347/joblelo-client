import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";

const ProfileUpdate = () => {
  const { ProfileUpdate, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://joblelo-server.vercel.app/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data[0].displayName);
          setDisplayName(data[0].displayName);
          setPhotoURL(data[0].photoURL);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user?.email]);

  const handleToUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const updateUser = { displayName, photoURL };
    ProfileUpdate(displayName, photoURL)
      .then((res) => {
        fetch(`https://joblelo-server.vercel.app/user/${user.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Profile updated successfully");
              navigate("/");
              console.log("Profile updated successfully", res);
            }else {
              toast.error("Profile not updated");
            }
          });
      })
      .catch((error) => {
        toast.error("Updating profile failed, try again");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-blue-200 dark:bg-slate-900 px-14 py-10 shadow-xl mt-12 mb-12">
        <p className="text-3xl text-blue-900 font-bold text-center my-10">
          Update Your Profile
        </p>
        <hr className="bg-white" />
        <form
          className="mt-10 w-full md:w-2/3 mx-auto"
          onSubmit={handleToUpdateProfile}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-blue-900">
                Your Email
              </span>
            </label>
            <input
              type="text"
              value={user?.email}
              className="input input-primary"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-blue-900">
                Your Name
              </span>
            </label>
            <input
              name="displayName"
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-blue-900">
                Photo Url
              </span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-primary"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-900 text-white hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUpdate;
