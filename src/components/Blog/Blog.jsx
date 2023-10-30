import React from 'react';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
  return (
    <div>
      <div className=' my-5 rounded shadow pb-3'>
        <figure><img src={cover} alt="Shoes" className='w-full' /></figure>
        <div className='p-4 space-y-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <figure><img src={author_img} alt="Shoes" className='w-14' /></figure>
              <div>
                <p>{author}</p>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <p>{reading_time} Minute read</p>
              <button onClick={() => handleAddToBookmark(blog)} className='text-lime-500'><FaBookmark /></button>
            </div>
          </div>
          <h2 className='text-2xl '>{title}</h2>
          <p>
            {
              hashtags.map((hash, idx) => <span key={idx} className='text-indigo-600'><a href=""> #{hash}</a></span>)
            }
          </p>
          <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-600 underline text-sm'>Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;