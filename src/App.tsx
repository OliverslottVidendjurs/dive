import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/Home';
import Equipment from './components/equipment/Equipment';
import Trips from './components/trips/Trips';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Header from './components/header/Header';
import EqueptmentContextProvider from './contexts/EqueptmentContext';
import TripsContextProvider from './contexts/TripsContext';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

const App: React.FC = () => {
	return (
		<div className="App">
			<TripsContextProvider>
				<EqueptmentContextProvider>
					<BrowserRouter>
						<Header />
						<Route exact path="/">
							<Home />
						</Route>
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
						<Route path="login">
							<Login />
						</Route>
						<Footer />
					</BrowserRouter>
				</EqueptmentContextProvider>
			</TripsContextProvider>
		</div>
	);
}

export default App;
