import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../pages/errorpage/Error";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import AddJobForm from "../pages/addJobs/AddJobForm";
import JobDetail from "../pages/jobDetailpage/JobDetail";
import AllJobs from "../pages/alljobpage/AllJobs";
import PrivateRoute from "./PrivateRoute";
import Applied from "../pages/appliedpage/Applied";
import MyJobPost from "../pages/myjobpage/MyJobPost";
import UpdateJob from "../pages/updatepage/UpdateJob";
import ProfileUpdate from "../pages/profileupdate/ProfileUpdate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><ProfileUpdate /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addjob",
        element: <PrivateRoute><AddJobForm /></PrivateRoute>,
      },
      {
        path: "/job-detail/:id",
        element: <PrivateRoute><JobDetail /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://joblelo-server.vercel.app/jobpost/${params.id}`)
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/appliedjobs",
        element: <PrivateRoute><Applied /></PrivateRoute>,
      },
      {
        path: "/myjobs",
        element: <PrivateRoute><MyJobPost /></PrivateRoute>,
      },
      {
        path: "/updatejobpost/:id",
        element: <PrivateRoute><UpdateJob /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://joblelo-server.vercel.app/jobpost/${params.id}`)
      },
    ],
  },
]);

export default router;
