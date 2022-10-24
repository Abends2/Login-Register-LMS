import { Link } from 'react-router-dom';

import 'boxicons';

import './App.css';

import { useTheme } from './theme-hook/use-theme';
import Register from './Register';


var mainLogoBlack = require('./logo-black.png');
var mainLogoWhite = require('./logo-white.png');
var gmailLogo = require('./gmail.png');
var vkLogo = require('./vk.png');
var yandexLogo = require('./yandex.png');
var telegramLogo = require('./telegram.png');


function App() {
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
								<input type="text" placeholder="Логин"/>
							</label>

							<label>
								<input type="password" placeholder="Пароль"/>
							</label>

							<div>
								<button className="login-button" type="submit">
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

						<footer>
							<span>Нет аккаунта? </span>
							<Link to="/registration">Зарегистрироваться</Link>
						</footer>
					</div>
				</main>

				<div className="theme-btns">
					<button className="light-theme-btn" onClick={handleLightThemeClick}><box-icon name='sun'></box-icon></button>
					<button className="dark-theme-btn" onClick={handleDarkThemeClick}><box-icon name='moon'></box-icon></button>
				</div>
			</div> 
		</div>
	);
}

export default App;
