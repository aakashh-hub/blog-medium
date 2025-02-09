import React from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Card = ({ blog, index, onDelete }) => {
  return (
    <Link to={`/blog/${index}`} className="flex bg-blue-50 border p-4 rounded-lg shadow-md my-4 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-100 ">
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{blog.title}</h2>
        <p className="text-sm text-gray-600">By {blog.author}</p>
        <p className="text-sm">{blog.description}</p>
        <p className="text-xs text-gray-500">Published on {new Date(blog.date).toLocaleDateString()}</p>
        <div className="flex gap-2 mt-5">
          <Trash2 onClick={(e) => { e.preventDefault(); onDelete(blog.id); }} size={20} className="hover:text-red-500" />
        </div>
      </div>
      {blog.imageUrl && (
        <img src={blog.imageUrl} alt="Blog" className="w-32 h-32 object-cover rounded-lg" />
      )}
    </Link>
  );
};

export default Card;