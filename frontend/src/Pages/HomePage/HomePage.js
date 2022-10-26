import { Link } from 'react-router-dom';
import './HomePage.css';
import '../../index.css';
import { useTheme } from '../custom-hooks/use-theme';
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";


function HomePage() {
	const { theme, setTheme } = useTheme();

	const handleLightThemeClick = () => {
		setTheme('light');
	}

	const handleDarkThemeClick = () => {
		setTheme('dark');
	}

	return (
		<div className="home-page-wrapper">
			<div className="container">
  				<div className="shape"></div>
			</div>
			<div className="phrase"><b>ImPulse Learning Management System</b></div>
			<div className="login-btn"><Link to="/login" className="link-to"><span className="login-link">Вход</span></Link></div>
			<div className="reg-btn"><Link to="/reg" className="link-to"><span className="reg-link">Регистрация</span></Link></div>
			<div className="theme-btns">
				<button className="light-theme-btn" onClick={handleLightThemeClick}><box-icon name='sun'></box-icon></button>
				<button className="dark-theme-btn" onClick={handleDarkThemeClick}><box-icon name='moon'></box-icon></button>
			</div>
		</div>
		
	);
}

export default HomePage;