import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Resume from './components/Resume';

function App() {
  return (
    <div className="font-dm">
      <Navbar/>
      <Header/>
      <Main/>
      <Section/>
      <Resume/>
    </div>
  );
}

export default App;