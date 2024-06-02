import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const { user, logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);


  // Apply the theme to the document on component mount and theme change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleSignOut = () => {
    logout().then().catch();
  };

  const handletoChangeProfile = () => {};

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserDetails(user.email);
    }
  }, [user]);

  const fetchUserDetails = async (email) => {
    try {
      const response = await fetch(`https://joblelo-server.vercel.app/user?email=${email}`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setUserInfo(data[0]);
      }

    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };
  // console.log(userInfo);

  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:!bg-white !text-blue-700"
              : isActive
              ? "text-blue-800 underline font-bold underline-offset-8 hover:!bg-white hover:!text-blue-800"
              : " !text-blue-800 font-bold hover:!bg-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:!bg-white !text-blue-700"
              : isActive
              ? "text-blue-800 underline font-bold underline-offset-8 hover:!bg-white hover:!text-blue-800"
              : " !text-blue-800 font-bold hover:!bg-white"
          }
          to="/alljobs"
        >
          All Job
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:!bg-white !text-blue-700"
              : isActive
              ? "text-blue-800 underline font-bold underline-offset-8 hover:!bg-white hover:!text-blue-800"
              : " !text-blue-800 font-bold hover:!bg-white"
          }
          to="/addjob"
        >
          Add A Job
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending hover:!bg-white !text-blue-700"
                : isActive
                ? "text-blue-800 underline font-bold underline-offset-8 hover:!bg-white hover:!text-blue-800"
                : " !text-blue-800 font-bold hover:!bg-white"
            }
            to="/appliedjobs"
          >
            Applied Jobs
          </NavLink>
        ) : (
          ""
        )}
      </li>
      <li>
        {user ? (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending hover:!bg-white !text-blue-700"
                : isActive
                ? "text-blue-800 underline font-bold underline-offset-8 hover:!bg-white hover:!text-blue-800"
                : " !text-blue-800 font-bold hover:!bg-white"
            }
            to="/myjobs"
          >
            My Jobs
          </NavLink>
        ) : (
          ""
        )}
      </li>
    </>
  );

  return (
    <div
      className={`bg-white dark:bg-slate-900 shadow-sm z-[1000] ${
        isSticky ? "sticky top-0 shadow-lg" : ""
      }`}
    >
      <div className="drawer max-w-7xl mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img className="w-6 md:w-12" src={logo} alt="logo" />{" "}
              <span className="md:ml-2 font-bold text-blue-900 text-sm md:text-3xl">
                JobLeLo
              </span>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal ml-[200px]">
                {/* Navbar menu content here */}
                {navlinks}
              </ul>
            </div>
            <div className="navbar-end">
              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={
                          userInfo?.photoURL 
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-blue-100 text-blue-900 rounded-box w-52"
                  >
                    <li>
                      <a className="text-blue-900 font-bold">
                        {userInfo?.displayName}
                      </a>
                    </li>
                    <li>
                      <Link to="/update-profile">
                        <button
                          onClick={handletoChangeProfile}
                          className=""
                        >
                          Profile
                        </button>
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleSignOut} className="">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-3 text-center rounded-sm w-[80px] text-white hover:bg-blue-800 bg-blue-900"
                >
                  Login
                </Link>
              )}
              <label className="swap swap-rotate md:ml-10">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                  onChange={handleToggle}
                  checked={theme === "light" ? true : false}
                />
                {/* sun icon */}
                <svg
                  className="swap-off fill-blue-900 w-8 h-8 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg
                  className="swap-on fill-blue-900 w-8 h-8 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side z-[1000]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
