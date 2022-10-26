import { Link } from 'react-router-dom';
import './WelcomePage.css';
import { useTheme } from '../custom-hooks/use-theme';


function WelcomePage() {
	const { theme, setTheme } = useTheme();

	const handleLightThemeClick = () => {
		setTheme('light');
	}

	const handleDarkThemeClick = () => {
		setTheme('dark');
	}

	return (
		<div className="welcome-wrapper">
			
			<div className="welcome">
				<span>Welcome, dear user! </span>
				<span><Link to='/'>На главную</Link></span>
			</div>
		</div>
		
	);
}

export default WelcomePage;