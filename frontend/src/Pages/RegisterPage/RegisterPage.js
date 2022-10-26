import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../custom-hooks/use-theme';
import { format } from 'react-string-format';

var mainLogoBlack = require('../logo-black.png');
var mainLogoWhite = require('../logo-white.png');
var gmailLogo = require('../gmail.png');
var vkLogo = require('../vk.png');
var yandexLogo = require('../yandex.png');
var telegramLogo = require('../telegram.png');





const RegisterPage = () => {

	// POST request to /api/register/

	// See the flask configuration!
	const headers = {
		'Access-Control-Allow-Origin' : '*',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin' : 'https://localhost:3000',
		'Access-Control-Allow-Credentials' : 'true'
	}



	//var req = format('https://localhost:5000/api/register?username={0}&password={1}&name={2}&surname={3}&mail={4}&phone={5}', data.username, data.password, data.name, data.surname, data.mail, data.phone);
	//axios.post(req, headers)
  //  .then((response) => {
  //    console.log(response);
  //  });


	// Swithing theme
	const { theme, setTheme } = useTheme();

	const handleLightThemeClick = () => {
		setTheme('light');
	}

	const handleDarkThemeClick = () => {
		setTheme('dark');
	}


	// Logo Pic
	var sourcePic = '';

	if (theme === 'light') {
		sourcePic = mainLogoBlack;
	} else {
		sourcePic = mainLogoWhite;
	}
	
	const MakeRegistration = () => {
			var req = format('https://localhost:5000/api/register?username={0}&password={1}&name={2}&surname={3}&mail={4}&phone={5}', username, password, name, surname, email, phone);
			console.log(req);
			axios.post(req, {'Access-Control-Allow-Origin' : '*','Content-Type': 'application/json','Access-Control-Allow-Credentials' : 'true'})
  		  .then((response) => {
  		  	console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
  		    console.log(response);
  		    console.log(response.data);
  		  });
};

//---------------------------------------------

  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [password,setPassword] = useState(null);
  const [password_conf,setConfirmPassword] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);


const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "name"){
            setName(value);
        }
        if(id === "surname"){
            setSurname(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "password_conf"){
            setConfirmPassword(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }

    }
	
//---------------------------------------------

	return (
		<div className="App2">
			<div className="App-wrapper2">
				<main className="App-main-content2">
					<div className="container-logo2">
							<img className="logo2" src={sourcePic} alt=''/>
					</div>

					<div className="main-container2">
						<h3 className="login2">Регистрация</h3>
						<form>
							<label className="reg-label">
								<p className="nickname-or-phone">Введите данные для регистрации</p>
								<input type="text" className="username" placeholder="Никнейм" value={username} onChange = {(e) => handleInputChange(e)} id="username"/>
							</label>

							<label className="reg-label">
								<input type="text" className="name" placeholder="Имя" value={name} onChange = {(e) => handleInputChange(e)} id="name"/>
							</label>

							<label className="reg-label">
								<input type="text" className="surname" placeholder="Фамилия" value={surname} onChange = {(e) => handleInputChange(e)} id="surname"/>
							</label>

							<label className="reg-label">
								<input type="password" className="username" placeholder="Пароль" value={password} onChange = {(e) => handleInputChange(e)} id="password"/>
							</label>

							<label className="reg-label">
								<input type="password" className="username" placeholder="Подтверждение пароля" value={password_conf} onChange = {(e) => handleInputChange(e)} id="password_conf"/>
							</label>

							<p className="optional">Необязательные поля</p>
							
							<label className="reg-label">
								<input type="text" className="E-mail" placeholder="e-mail (необязательно)" value={email} onChange = {(e) => handleInputChange(e)} id="email"/>
							</label>

							<label className="reg-label">
								<input type="text" className="phone" placeholder="Номер телефона (необязательно)" value={phone} onChange = {(e) => handleInputChange(e)} id="phone"/>
							</label>

							<div>
								<button className="login-button"  onClick={MakeRegistration}>
									<span>Создать</span>
								</button>
							</div>
						</form>

						<div className="icons-wrapper2">
							<span className="another-login">Регистрация через соцсети</span>
							<ul className="socials">
								<li className="icons"><img className="gmail" src={gmailLogo} alt=''/></li>
								<li className="icons"><img className="vk" src={vkLogo} alt=''/></li>
								<li className="icons"><img className="yandex" src={yandexLogo} alt=''/></li>
								<li className="icons"><img className="telegram" src={telegramLogo} alt=''/></li>
							</ul>
						</div>

						<div className="footer2">
							<span>Есть аккаунт? </span>
							<Link to="/login" className="Link2">Войти</Link>
						</div>

						<div className="back-to-homepage2">
							<Link to="/" className="Link2">Вернуться на главную</Link>
						</div>

					</div>
				</main>

				<div className="theme-btns2">
					<button className="light-theme-btn2" onClick={handleLightThemeClick}><box-icon name='sun'></box-icon></button>
					<button className="dark-theme-btn2" onClick={handleDarkThemeClick}><box-icon name='moon'></box-icon></button>
				</div>
			</div> 
		</div>
	);
};

export default RegisterPage;