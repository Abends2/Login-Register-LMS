import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import HomePage from "./Pages/HomePage/HomePage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/reg" element={<RegisterPage />}/>
				<Route path="/login" element={<LoginPage />}/>
				<Route path="/welcome" element={<WelcomePage />}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

const App = () => {
	return (
		<div>Start</div>
	)
}

export default App;