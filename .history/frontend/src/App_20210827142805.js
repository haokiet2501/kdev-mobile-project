import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
