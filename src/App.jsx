import { useState } from 'react'
import { Header } from './components/Header'

import './global.scss';
import styles from './App.module.scss';
import { Sidebar } from './components/Sidebar/Sidebar';


function App() {
	return (
		<>
		<Header />
		
		<div className={styles.wrapper}>
			<Sidebar />
			<main>
				post
			</main>
		</div>
		</>
	);
};
	
export default App;
	