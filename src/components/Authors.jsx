import React from 'react'

const Authors = ({ blog }) => {

  return (
    <div className='m-4 flex flex-col w-50 h-50 bg-blue-50 border p-4 rounded-lg shadow-md my-4 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-100 '>
      <img className='h-30' src={blog.imageUrl}/>
      <h1 className='my-3 text-center text-xl font-bold'>{blog.author}</h1>
    </div>
  )
}

export default Authors
