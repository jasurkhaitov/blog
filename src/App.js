import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Resume from './components/Resume';
import Footer from './components/Footer';
import About from './components/About';
import { Contexts } from './contexts/Context';

function App() {

  const [backToTop, setBackToTop] = useState(false)

  const scrollToTop = () => {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', function() {

      if (this.scrollY < 2000) {
        setBackToTop('backToTop')
      } 
      else if (this.scrollY > 5000) {
        setBackToTop('backToTop')
      }
      else {
        setBackToTop('backToTopTwo')
      }

    })
  })

  return (
    <div className="font-dm bg-black">

      <Contexts.Provider>
        <Navbar/> 
        <Header/>
        <Resume/>
        <Main/>
        <Section/>
        <Footer/>
        <About/>
      </Contexts.Provider>

      <div className={backToTop} onClick={scrollToTop}>
        <i class="fa-solid fa-angles-up fa-shake"></i>
      </div>

    </div>
  );
}

export default App;