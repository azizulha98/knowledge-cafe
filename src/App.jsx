import React from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import BookMarks from './components/BookMarks/BookMarks';

const App = () => {
  return (
    <div>
      <Header />
      <div className='md:flex max-w-screen-xl mx-auto px-2 md:px-3'>
        <Blogs />
        <BookMarks />
      </div>
    </div>
  );
};

export default App;
