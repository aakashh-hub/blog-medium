import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-100 h-100 bg-green-100">
      <div className="flex w-100 justify-center">
        <img
          className="w-25 scale-100"
          src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
        />
      </div>
      <div className="">
        <h2>Author:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Author"/>
        <h2>Title:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Title" />
        <h2>Description:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Description"/>
        <h2>Blog content:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Content"/>
        <h2>Image url:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Enter image url"/> 
      </div>
    </div>
  );
};

export default CreateBlog;
