// import logo from './logo.svg';
import styles from './App.module.css';
// import { doc } from 'prettier';
import { MyComponent } from './MyComponent';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<MyComponent type="normal" value="123" />
			</header>
		</div>
	);
};
