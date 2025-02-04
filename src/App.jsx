import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import BlogDetail from "./components/BlogDetail";

function App() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  const handleDelete = (blogToDelete) => {
    const updatedBlogs = blogs.filter(blog => blog !== blogToDelete);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
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
    navigate('/');
  };

  const handleAdd = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto p-4">
              {blogs.map((blog, index) => (
                <Card key={index} blog={blog} index={index} onDelete={handleDelete} onLike={handleLike} />
              ))}
            </div>
          }
        />
        <Route path="/addBlog" element={<CreateBlog onAddBlog={handleAdd} />} />
        <Route path="/blog/:index" element={<BlogDetail blogs={blogs} onUpdate={handleUpdate} />} />
      </Routes>
    </>
  );
}

export default App;