import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
// import Section from './components/Section';

function App() {
  return (
    <div className="font-dm">
      <Navbar/>
      <Header/>
      <Main/>
      {/* <Section/> */}
    </div>
  );
}

export default App;