import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from '../Components/Routes/Routes';

function App() {
  return (
    <div className='relative min-h-screen pb-8'>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
