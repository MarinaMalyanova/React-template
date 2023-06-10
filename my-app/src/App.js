import logo from './logo.svg';
import './App.css';
// import { doc } from 'prettier';

// export const App = () => {
// 	const currentYear = new Date().getFullYear(); // императивный стиль
// 	return (
// 		// декларативный стиль
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload .
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<div>{currentYear}</div>
// 			</header>
// 		</div>
// 	);
// };
export const App = () => {
	const currentYear = new Date().getFullYear();

	const appDiv = document.createElement('div');
	appDiv.className = 'App';

	const appHeader = document.createElement('header');
	appHeader.className = 'App-header';

	const appLogo = document.createElement('img');
	appLogo.src = `${logo}`;
	appLogo.className = 'App-logo';
	appLogo.alt = 'logo';

	const par = document.createElement('p');
	par.textContent = 'Edit src/App.js and save to reload .';

	const appLink = document.createElement('a');
	appLink.className = 'App-link';
	appLink.href = 'https://reactjs.org';
	appLink.target = '_blank';
	appLink.rel = 'noopener noreferrer';
	appLink.textContent = 'Learn React';

	const currentDate = document.createElement('div');
	currentDate.textContent = `${currentYear}`;

	appDiv.append(appHeader);
	appHeader.append(appLogo, par, appLink, currentDate);

	return appDiv;
};
const body = document.querySelector('body');
const element = App();
body.append(element);
