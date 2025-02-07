import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import BlogDetail from "./components/BlogDetail";
import CoverPage from "./components/CoverPage";
import Swal from "sweetalert2";
import Authors from "./components/Authors";
import SampleComponent from "./components/SampleComponent";

function App() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  const handleDelete = (blogToDelete) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBlogs = blogs.filter(blog => blog !== blogToDelete);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleLike = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].likes += 1;
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleUpdate = (index, updatedBlog) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = updatedBlog;
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleAdd = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <>
      <NavBar />
      <SampleComponent/>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="flex justify-center">
                <CoverPage />
              </div>
              <div className="container mx-auto p-4">
                {blogs.map((blog, index) => (
                  <Card key={index} blog={blog} index={index} onDelete={handleDelete} onLike={handleLike} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/addBlog" element={<CreateBlog onAddBlog={handleAdd} />} />
        <Route path="/blog/:index" element={<BlogDetail blogs={blogs} onUpdate={handleUpdate} />} />
        <Route 
          path="/authors" 
          element={
            <div className="mx-auto">
              {
                blogs.map((blog, index) => (
                  <Authors key={index} blog={blog} index={index}/>
                ))
              }
            </div>
          }
        />
      </Routes> */}
    </>
  );
}

export default App;