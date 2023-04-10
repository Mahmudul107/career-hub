import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <Header/>
        <Home/>
      </div>
    </>
  );
};

export default App;