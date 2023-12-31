import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({ bookmarks, readingTime }) => {

  return (
    <div className='md:w-1/3'>
      <div className='bg-slate-100 uppercase py-2 px-3 rounded mb-3'>
        <h2 className='text-2xl bg-base-100 rounded px-2 py-1'>Reading Time : {readingTime} </h2>
      </div>
      <div className='bg-slate-100 uppercase py-2 px-3 rounded space-y-2'>
        <h2 className='text-2xl bg-base-100 rounded px-2 py-1 '>Book Marks : {bookmarks.length} </h2>
        <div>
          {
            bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx} />)
          }
        </div>
      </div>
    </div>
  );
};

export default BookMarks;