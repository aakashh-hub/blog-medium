import React from 'react'
import { useState, useEffect } from 'react';

const Authors = ({ blog, index }) => {

  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      const data = await response.json();
      setAuthors(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className='m-4 flex flex-col w-50 h-50 bg-blue-50 border p-4 rounded-lg shadow-md my-4 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 '>
      <img className='h-30' src={blog.image}/>
      <h1 className='my-3 text-center text-xl font-bold'>{blog.author}</h1>
    </div>
  )
}

export default Authors
