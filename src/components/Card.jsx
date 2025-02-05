import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Heart } from "lucide-react";

const Card = ({ blog, index, onDelete, onLike }) => {
  return (
    <Link to={`/blog/${index}`} className="flex bg-blue-50 border p-4 rounded-lg shadow-md my-4 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 ">
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{blog.title}</h2>
        <p className="text-sm text-gray-600">By {blog.author}</p>
        <p className="text-sm">{blog.description}</p>
        <p className="text-xs text-gray-500">Published on {blog.date}</p>
        <div className="flex gap-2 mt-5">
          <div className="flex">
            <Heart onClick={(e) => { e.preventDefault(); onLike(index); }} size={20} className="hover:text-red-500"/>
          </div>
          <Trash2 onClick={(e) => { e.preventDefault(); onDelete(blog); }} size={20} className="hover:text-red-500"/>
        </div>
      </div>
      {blog.image && (
        <img src={blog.image} alt="Blog" className="w-32 h-32 object-cover rounded-lg" />
      )}
    </Link>
  );
};

export default Card;