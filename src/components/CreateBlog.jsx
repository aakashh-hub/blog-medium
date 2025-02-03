import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-100 h-100 bg-green-100">
      <div className="flex w-100">
        <img
          className="w-25 scale-100"
          src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
        />
      </div>
      <div>
        <h2>Title:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Title" />
      </div>
    </div>
  );
};

export default CreateBlog;
