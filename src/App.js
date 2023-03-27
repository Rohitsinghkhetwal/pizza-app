import React from "react"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "./pages/Contact"
import Menudetail from "./pages/Menudetail"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/menu/:id/' exact component={Menudetail} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
