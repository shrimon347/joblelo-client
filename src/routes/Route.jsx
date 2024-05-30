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
        loader: ({ params }) => fetch(`http://localhost:5000/jobpost/${params.id}`)
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
        loader: () => fetch(`http://localhost:5000/jobpost`)
      },
      {
        path: "/appliedjobs",
        element: <PrivateRoute><Applied /></PrivateRoute>,
      },
    ],
  },
]);

export default router;
