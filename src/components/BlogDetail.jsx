import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const BlogDetail = ({ blogs, onUpdate }) => {
  const { index } = useParams();
  const [blog, setBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(null);

  useEffect(() => {
    if (blogs[index]) {
      setBlog(blogs[index]);
      setEditedBlog({ ...blogs[index] });
    }
  }, [blogs, index]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({ ...editedBlog, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/blogs/${editedBlog.id}`, editedBlog);
      onUpdate(index, editedBlog);
      setIsEditing(false);
      Swal.fire({
        title: "Saved!",
        text: "Your blog was updated!",
        icon: "success"
      });
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <div className="container mx-auto w-200 h-100 my-10 rounded-lg bg-white p-1 shadow-2xl outline outline-black/5">
          <form onSubmit={handleEditSubmit}>
            <div className="flex bg-blue-50 justify-center">
              <img
                className="w-25 scale-100"
                src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
                alt="Logo"
              />
            </div>
            <div className="p-2">
              <div>
                <label htmlFor="title" className="block mb-2 text-md font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editedBlog.title}
                  onChange={handleEditChange}
                  className="bg-gray-50 w-90 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-md font-medium">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  value={editedBlog.description}
                  onChange={handleEditChange}
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
              </div>
              <div>
                <label htmlFor="blogContent" className="block mb-2 text-md font-medium">
                  Blog Content
                </label>
                <textarea
                  id="blogContent"
                  name="blogContent"
                  value={editedBlog.blogContent}
                  onChange={handleEditChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                />
              </div>
              <div className="flex my-5 w-full">
                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Save</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Link to="/" className="inline-flex items-center border border-black px-3 py-1.5 rounded-md text-black hover:bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="ml-1 font-bold text-lg">Back</span>
          </Link>
          <h1 className="flex text-5xl m-3 font-bold justify-center">{blog.title}</h1>
          {blog.imageUrl && (
            <img src={blog.imageUrl} alt="Blog" className="w-full my-4" />
          )}
          <p className="text-sm text-gray-600">By {blog.author}</p>
          <p className="text-xl">{blog.blogContent}</p>
          <div className="flex gap-2 mt-2">
            <button className="text-blue-500 hover:underline" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;