import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import 'boxicons';
import './LoginPage.css';
import { useTheme } from '../custom-hooks/use-theme';
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import { format } from 'react-string-format';

var mainLogoBlack = require('../logo-black.png');
var mainLogoWhite = require('../logo-white.png');
var gmailLogo = require('../gmail.png');
var vkLogo = require('../vk.png');
var yandexLogo = require('../yandex.png');
var telegramLogo = require('../telegram.png');


function LoginPage() {


	// Swithing theme
	const { theme, setTheme } = useTheme();

	const handleLightThemeClick = () => {
		setTheme('light');
	}

	const handleDarkThemeClick = () => {
		setTheme('dark');
	}

	var sourcePic = '';

	if (theme === 'light') {
		sourcePic = mainLogoBlack;
	} else {
		sourcePic = mainLogoWhite;
	}


	const [username, setUsername] = useState(null);
	const [password,setPassword] = useState(null);

	const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }
const MakeLogin = () => {
	var req = format('https://localhost:5000/api/login?username={0}&password={1}', username, password);
	console.log(req);
	axios.post(req, {'Access-Control-Allow-Origin' : '*','Content-Type': 'application/json','Access-Control-Allow-Origin' : 'https://localhost:3000','Access-Control-Allow-Credentials' : 'true'})
    .then((response) => {
      console.log(response);
      console.log(response.data);
    });

};

	return (
		<div className="App">
			<div className="App-wrapper">
				<main className="App-main-content">
					<div className="container-logo">
							<img className="logo" src={sourcePic} alt=''/>
					</div>

					<div className="main-container">
						<h3 className="login">Вход</h3>
						<form>
							<label>
								<p className="nickname-or-phone">Войдите с помощью логина или телефона</p>
								<input type="text" className="username" placeholder="Никнейм или телефон" value={username} onChange = {(e) => handleInputChange(e)} id="username"/>
							</label>

							<label>
								<input type="password" className="username" placeholder="Пароль" value={password} onChange = {(e) => handleInputChange(e)} id="password"/>
							</label>

							<div>
								<button className="login-button" type="submit" onClick={MakeLogin}>
									<span>Войти</span>
								</button>
							</div>
						</form>

						<div className="icons-wrapper">
							<span className="another-login">Вход через соцсети</span>
							<ul className="socials">
								<li className="icons"><img className="gmail" src={gmailLogo} alt=''/></li>
								<li className="icons"><img className="vk" src={vkLogo} alt=''/></li>
								<li className="icons"><img className="yandex" src={yandexLogo} alt=''/></li>
								<li className="icons"><img className="telegram" src={telegramLogo} alt=''/></li>
							</ul>
						</div>

						<div className="footer">
							<span>Нет аккаунта? </span>
							<Link to="/reg" className="Link">Зарегистрироваться</Link>
						</div>

						<div className="back-to-homepage">
							<Link to="/" className="Link">Вернуться на главную</Link>
						</div>
					</div>
				</main>

				<div className="theme-btns">
					<button className="light-theme-btn" onClick={handleLightThemeClick}><box-icon name='sun'></box-icon></button>
					<button className="dark-theme-btn" onClick={handleDarkThemeClick}><box-icon name='moon'></box-icon></button>
				</div>
			</div> 
		</div>
	);
};


export default LoginPage;