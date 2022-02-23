import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

import Header from './Components/header';
import Footer from './Components/footer';
import About from './Components/about';
import Resume from './Components/resume';
import Portfolio from './Components/portfolio';

import './app.css';

export default function App() {
	useEffect(() => {
		ReactGA.initialize('G-6S0WN3PTB7');
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []);

	return (
		<div>
			<Header />
			<About />
			<Resume />
			<Portfolio />
			<Footer />
		</div>
	);
}

