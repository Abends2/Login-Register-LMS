import './App.css';

import { useTheme } from './theme-hook/use-theme';;


var mainLogoBlack = require('./logo-black.png');
var mainLogoWhite = require('./logo-white.png');
var gmailLogo = require('./gmail.png');
var vkLogo = require('./vk.png');
var yandexLogo = require('./yandex.png');
var telegramLogo = require('./telegram.png');


const Register = () => {


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
						<h3 className="login">Регистрация</h3>
						<form>
							<label>
								<p className="nickname-or-phone">Я пока не занб что писать</p>
								<input type="text" placeholder="Логин"/>
							</label>

							<label>
								<input type="password" placeholder="Пароль"/>
							</label>

							<label>
								<input type="password" placeholder="Подтвержжение пароля"/>
							</label>

							<div>
								<button className="login-button" type="submit">
									<span>Создать</span>
								</button>
							</div>
						</form>

						<div className="icons-wrapper">
							<span className="another-login">Регистрация через соцсети</span>
							<ul className="socials">
								<li className="icons"><img className="gmail" src={gmailLogo} alt=''/></li>
								<li className="icons"><img className="vk" src={vkLogo} alt=''/></li>
								<li className="icons"><img className="yandex" src={yandexLogo} alt=''/></li>
								<li className="icons"><img className="telegram" src={telegramLogo} alt=''/></li>
							</ul>
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

export default Register;