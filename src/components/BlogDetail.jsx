import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

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
        <div>
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="title"
              value={editedBlog.title}
              onChange={handleEditChange}
              className="text-xl font-bold"
            />
            <textarea
              name="description"
              value={editedBlog.description}
              onChange={handleEditChange}
              className="text-sm"
            />
            <textarea
              name="blogContent"
              value={editedBlog.blogContent}
              onChange={handleEditChange}
              className="w-full"
            />
            <button type="submit" className="text-blue-500">Save</button>
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
          <h1 className="flex text-5xl font-bold justify-center">{blog.title}</h1>
          {blog.image && (
            <img src={blog.image} alt="Blog" className="w-full my-4" />
          )}
          <p className="text-sm text-gray-600">By {blog.author}</p>
          {/* <p className="text-sm">{blog.description}</p> */}
          <p className="text-xl">{blog.blogContent}</p>
          <div className="flex gap-2 mt-2">
            <button className="text-blue-500" onClick={() => onUpdate(index, { ...blog, likes: blog.likes + 1 })}>
              Like ({blog.likes})
            </button>
            <button className="text-blue-500" onClick={() => setIsEditing(true)}>
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
              <button type="submit" className="mx-2 text-blue-500">Add Comment</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;