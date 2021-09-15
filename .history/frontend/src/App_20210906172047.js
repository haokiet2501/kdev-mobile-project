import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/loginScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/login' component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
