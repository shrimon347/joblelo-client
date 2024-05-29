/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "../../components/shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import GoogleAuth from "./GoogleAuth";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)

      .then((result) => {
        toast.success("User logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("your email or password is incorrect");
      });
      e.target.reset()
  };
  return (
    <div>
      <Navbar />

      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('src/assets/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <div className="p-6">
                <Link to="/login" className="flex items-center justify-center">
                  <img src={logo} className=" h-[50px] block " alt="" />
                  <span className="text-2xl font-bold ml-2 text-blue-900">
                    JobLeLo
                  </span>
                </Link>
                <h5 className="my-6 text-xl font-bold text-blue-900">Login</h5>
                <form className="text-left" onSubmit={handleLogin}>
                  <div className="grid grid-cols-1">
                    <div className="form-control">
                      <label className="input input-primary flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                          name="email"
                          type="email"
                          className="w-full"
                          placeholder="Email"
                        />
                      </label>
                    </div>
                    <div className="form-control mt-5">
                      <label className="input input-primary flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          className="w-full"
                          placeholder="password"
                        />
                        <span
                          className="cursor-pointer text-2xl absolute right-10 text-blue-900 dark:text-blue-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </span>
                      </label>
                    </div>

                    <div className="flex justify-between mb-4 mt-5">
                      <div className="inline-flex items-center mb-0">
                        <input
                          className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-600 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          id="RememberMe"
                          value=""
                        />
                        <label
                          className="form-checkbox-label text-slate-400"
                          htmlFor="RememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <p className="text-slate-400 mb-0">
                        <Link className="text-slate-400" to="">
                          Forgot password ?
                        </Link>
                      </p>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-blue-900 text-white hover:bg-blue-700">
                        Login
                      </button>
                    </div>
                    <div className="text-center mt-8">
                      <span className="text-slate-400 me-2">
                        Don&apos;t have an account ?
                      </span>{" "}
                      <Link className="text-blue-900 font-bold " to="/register">
                        Sign Up
                      </Link>
                    </div>
                    <div className="divider text-green-900">continue with</div>
                    <GoogleAuth />
                  </div>
                </form>
              </div>
              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                <p className="mb-0 text-gray-400 font-medium">
                  © 2024 JobLeLo. Designed by{" "}
                  <Link
                    className="text-reset"
                    href="https://shreethemes.in/"
                    target="_blank"
                  >
                    Riobot
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
