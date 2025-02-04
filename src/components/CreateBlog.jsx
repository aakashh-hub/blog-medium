import React from "react";

const CreateBlog = () => {
  return (
    <div className="container mx-auto w-200 h-200 my-5 rounded-lg bg-white p-2 shadow-2xl outline outline-black/5">
      <div className="flex bg-blue-50 justify-center">
        <img
          className="w-25 scale-100"
          src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
        />
      </div>
      <div className="bg-red-100">
        <h2>Author:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Author"/>
        <h2>Title:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Title" />
        <h2>Description:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Description"/>
        <h2>Blog content:</h2>
        <textarea className="border border-black rounded-lg" type="text" placeholder="Content"/>
        <h2>Image url:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Enter image url"/> 
        <div>
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Cancel</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
