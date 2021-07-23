import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
// import Project from './components/Project';
import Card from './components/Card';
import Footer from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      {/* <Project /> */}
      <Card />
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
