import React from "react";

const CreateBlog = () => {
  return (
    <div className="container mx-auto w-200 h-200 my-10 rounded-lg bg-white p-1 shadow-2xl outline outline-black/5">
      <div className="flex bg-blue-50 justify-center">
        <img
          className="w-25 scale-100"
          src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
        />
      </div>
      <div className="">

        <label for="author" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Author</label>
        <input type="text" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="Author name" required />

        <label for="title" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="Title" required />

        <label for="description" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text" id="description" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="Discription" required />

        <label for="blogContent" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Blog Content</label>
        <textarea id="blogContent" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>

        {/* <h2>Title:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Title" />
        <h2>Description:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Description" /> 
        <h2>Blog content:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Content" />*/}

        {/* <h2>Image url:</h2>
        <input className="border border-black rounded-lg" type="text" placeholder="Enter image url" /> */}

        <label for="author" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Author</label>
        <input type="text" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="Author name" required />
        <div className="bg-amber-500">
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg">Cancel</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
