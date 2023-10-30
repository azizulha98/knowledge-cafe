import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import BookMarks from './components/BookMarks/BookMarks';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog])
  }
  return (
    <div>
      <Header />
      <div className='md:flex max-w-screen-xl mx-auto px-2 md:px-3 gap-10'>
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <BookMarks bookmarks={bookmarks} />
      </div>
    </div>
  );
};

export default App;
