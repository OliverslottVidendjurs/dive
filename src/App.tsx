import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/Home';
import Equipment from './components/equipment/Equipment';
import Trips from './components/trips/Trips';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Header from './components/common/Header';
import EqueptmentContextProvider from './contexts/EqueptmentContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <EqueptmentContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
        </EqueptmentContextProvider>
        <Route path="/equipment">
          <Equipment />
        </Route>
        <Route path="/trips">
          <Trips />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
