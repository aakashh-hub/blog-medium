import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
      ) : (
        <div>
          <h2 className="text-xl font-bold">{blog.title}</h2>
          {blog.image && (
            <img src={blog.image} alt="Blog" className="w-full my-4" />
          )}
          <p className="text-sm text-gray-600">By {blog.author}</p>
          <p className="text-sm">{blog.description}</p>
          <p className="text-sm">{blog.blogContent}</p>
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
                className="border p-1 my-2"
                placeholder="Add a comment"
              />
              <button type="submit" className="text-blue-500">Add Comment</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;