/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const GoogleAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInGoogle } = useContext(AuthContext);

  const handleToLoginWithGoogle = async () => {
    try {
      const res = await signInGoogle();
      console.log(res.user);
      const { creationTime: createdAt } = res.user.metadata;
      const { photoURL, email, displayName } = res.user;
      const user = { email, createdAt, displayName, photoURL };

      // Check if the user already exists in the database
      const existingUserResponse = await fetch(
        `https://joblelo-server.vercel.app/user?email=${email}`
      );
      const existingUser = await existingUserResponse.json();

      if (existingUser.length === 0) {
        // User does not exist, so add them to the database
        const response = await fetch("https://joblelo-server.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.insertedId) {
          toast.success("You have logged in successfully");
        }
      } else {
        toast.success("Welcome back!");
      }

      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to login with Google");
    }
  };

  return (
    <div className="flex justify-around">
      <button
        onClick={handleToLoginWithGoogle}
        className="btn hover:bg-blue-700 bg-blue-900 text-white outline-none"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleAuth;
