import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
  // modal

  const [showModal, setShowModal] = useState(false)

  function changeModal() {
    setShowModal(!showModal)
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Contact changeModal={changeModal} />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App