import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className='md:w-2/3'>
      <h2 className='text-2xl font-bold'>Blogs: {blogs.length}</h2>
      <div>
        {
          blogs.map(blog => <Blog blog={blog} key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />)
        }
      </div>
    </div>
  );
};

export default Blogs;