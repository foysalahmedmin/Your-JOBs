import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <main className='mt-[4.7rem] min-h-[calc(100vh-4.7rem)]'>
      <Outlet />
    </main>
    <Footer />
    </>
  );
};

export default App;