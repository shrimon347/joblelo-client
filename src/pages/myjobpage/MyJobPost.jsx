import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Explore from "../../components/shared/Explore";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";

const MyJobPost = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [mylist, setMylist] = useState([]);
  //   const [jobs, setJobs] = useState(mylist)

  const url = `https://joblelo-server.vercel.app/jobpost?email=${user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMylist(res.data);
      setLoading(false);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMylist(data);
    //     setLoading(false);
    //   });
  }, [url]);

  const handleToDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://joblelo-server.vercel.app/jobpost/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // console.log("delete");
              // console.log(jobs);
              const remaning = mylist.filter((job) => job._id !== _id);
              console.log(remaning);
              setMylist(remaning);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center mt-10">
            <span className="loading loading-bars  loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Application Deadline</th>
                  <th> Salary Range</th>
                  <th>Location</th>
                  <th>Details</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {mylist.map((list) => (
                <tbody key={list._id}>
                  <tr>
                    <th>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={list.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{list.companyName}</div>
                          <div className="text-sm opacity-50">
                            {list.createdAt}
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>Date : {list.deadLine}</td>
                    <td>Salary : {list.salary}</td>
                    <td>{list.location}</td>
                    <td>
                      <Link
                        to={`/job-detail/${list._id}`}
                        className="btn btn-primary btn-xs"
                      >
                        details
                      </Link>
                    </td>
                    <th>
                      <Link to={`/updatejobpost/${list._id}`}>
                        <button className="text-3xl text-blue-900">
                          <BiSolidEdit />
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleToDelete(list._id)}
                        className="text-3xl text-blue-900"
                      >
                        <MdCancel />
                      </button>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default MyJobPost;
