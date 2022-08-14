import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './global.scss';
import styles from './App.module.scss';


function App() {
	return (
		<>
		<Header />
		
		<div className={styles.wrapper}>
			<Sidebar />
			<main>
				<Post />
			</main>
		</div>
		</>
	);
};
	
export default App;
	