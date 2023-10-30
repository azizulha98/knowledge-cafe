import React from 'react';

const Bookmark = ({ bookmark }) => {
  return (
    <div className='bg-base-100 rounded px-2 py-1 mb-2'>
      <h2>{bookmark.title}</h2>
    </div>
  );
};

export default Bookmark;