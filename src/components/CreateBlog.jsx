import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateBlog = ({ onAddBlog }) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    blogContent: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      date: new Date().toLocaleDateString(),
      likes: 0,
      comments: [],
    };
    onAddBlog(newBlog);
    navigate('/');
    Swal.fire({
      title: "Great!",
      text: "Your blog has been published!",
      icon: "success"
    });
  };

  return (
    <div className="container mx-auto w-200 h-170 my-10 rounded-lg bg-white p-1 shadow-2xl outline outline-black/5">
      <form onSubmit={handleSubmit}>
        <div className="flex bg-blue-50 justify-center">
          <img
            className="w-25 scale-100"
            src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
            alt="Logo"
          />
        </div>
        <div className="space-y-4 p-2">
          <label htmlFor="author" className="block mb-2 text-md font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="bg-gray-50 w-90 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Author's name"
            required
            value={formData.author}
            onChange={handleChange}
          />

          <label htmlFor="title" className="block mb-2 text-md font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Title"
            required
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="description" className="block mb-2 text-md font-medium">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Description"
            required
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="blogContent" className="block mb-2 text-md font-medium">
            Blog Content
          </label>
          <textarea
            id="blogContent"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your blog content here"
            required
            value={formData.blogContent}
            onChange={handleChange}
          ></textarea>

          <label htmlFor="image" className="block mb-2 text-md font-medium">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            required
            onChange={handleImageChange}
          />
          {/* {formData.image && <img src={formData.image} alt="Preview" className="h-40 object-left object-contain" />} */}
        </div>
        <div className="flex my-5 p-2 w-full justify-between">
          <button
            type="button"
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;