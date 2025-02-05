import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const BlogDetail = ({ blogs, onUpdate }) => {
  const { index } = useParams();
  const blog = blogs[index];
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState({ ...blog });
  const [newComment, setNewComment] = useState("");

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({ ...editedBlog, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdate(index, editedBlog);
    setIsEditing(false);
    Swal.fire({
      title: "Saved!",
      text: "Your blog was updated!",
      icon: "success"
    });
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const updatedComments = [...editedBlog.comments, newComment];
      setEditedBlog({ ...editedBlog, comments: updatedComments });
      setNewComment("");
      onUpdate(index, { ...editedBlog, comments: updatedComments });
    }
  };

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
                  value={editedBlog.description}
                  onChange={handleEditChange}
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
              </div>
              <div>
                <label htmlFor="blogcontent" className="block mb-2 text-md font-medium">
                  Blog Content
                </label>
                <textarea
                  name="blogcontent"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
              </path>
            </svg>
            <span className="ml-1 font-bold text-lg">Back</span>
          </Link>
          <h1 className="flex text-5xl m-3 font-bold justify-center">{blog.title}</h1>
          {blog.image && (
            <img src={blog.image} alt="Blog" className="w-full my-4" />
          )}
          <p className="text-sm text-gray-600">By {blog.author}</p>
          {/* <p className="text-sm">{blog.description}</p> */}
          <p className="text-xl">{blog.blogContent}</p>
          <div className="flex gap-2 mt-2">
            <button className="text-blue-500 hover:underline" onClick={() => onUpdate(index, { ...blog, likes: blog.likes + 1 })}>
              Likes ({blog.likes})
            </button>
            <button className="text-blue-500 hover:underline" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Comments</h3>
            <ul>
              {blog.comments.map((comment, i) => (
                <li key={i} className="text-sm">{comment}</li>
              ))}
            </ul>
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                value={newComment}
                onChange={handleNewCommentChange}
                className="border p-1 my-2 rounded-lg"
                placeholder="Add a comment"
              />
              <button type="submit" className="mx-2 text-blue-500 hover:underline">Post</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;