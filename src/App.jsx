import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import BlogDetail from "./components/BlogDetail";
import CoverPage from "./components/CoverPage";
import Swal from "sweetalert2";
import Authors from "./components/Authors";
import axios from "axios";

function App() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/blogs/${blogId}`);
          setBlogs(blogs.filter(blog => blog.id !== blogId));
          Swal.fire({
            title: "Deleted!",
            text: "Your blog has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error deleting blog:", error);
        }
      }
    });
  };

  const handleUpdate = async (index, updatedBlog) => {
    try {
      const response = await axios.put(`http://localhost:3000/blogs/${updatedBlog.id}`, updatedBlog);
      const updatedBlogs = [...blogs];
      updatedBlogs[index] = response.data;
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleAdd = async (newBlog) => {
    try {
      const response = await axios.post("http://localhost:3000/blogs", newBlog);
      setBlogs([...blogs, response.data]);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="flex justify-center">
                <CoverPage />
              </div>
              <div className="container mx-auto p-4">
                {blogs.map((blog, index) => (
                  <Card key={blog.id} blog={blog} index={index} onDelete={handleDelete} />
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
              {blogs.map((blog, index) => (
                <Authors key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;