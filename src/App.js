import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-dm h-[2000px]">
      <Navbar/> 
      <Header/>
      <Main/>
      <Section/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;