import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRoue

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/proudct/:id' component={ProductScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;