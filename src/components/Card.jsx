import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog, index, onDelete, onLike }) => {
  return (
    <Link to={`/blog/${index}`} className="flex border p-4 rounded-lg shadow-md my-4">
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{blog.title}</h2>
        <p className="text-sm text-gray-600">By {blog.author}</p>
        <p className="text-sm">{blog.description}</p>
        <p className="text-xs text-gray-500">Published on {blog.date}</p>
        <div className="flex gap-2 mt-2">
          <button className="text-blue-500" onClick={(e) => { e.preventDefault(); onLike(index); }}>
            Like ({blog.likes})
          </button>
          <button className="text-red-500" onClick={(e) => { e.preventDefault(); onDelete(blog); }}>
            Delete
          </button>
        </div>
      </div>
      {blog.image && (
        <img src={blog.image} alt="Blog" className="w-32 h-32 object-cover rounded-lg" />
      )}
    </Link>
  );
};

export default Card;