import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import { useState } from 'react';
import './global.scss';
import styles from './App.module.scss';

function App() {
	const [posts, setPosts] = useState([{
		author: {
			name: "Felipe",
			role: "WEB Developer",
			avatarUrl: 'http://www.github.com/felipeevalerio.png'
		},
		publishedAt: new Date(Date.now()),
		content: [
			{type: 'paragraph', content: 'Teste'},
			{type: 'paragraph', content: 'Teste2'},
			{type: 'link', content: 'github.com/felipeevalerio'},

		]
	}]);

	return (
		<>
		<Header />
		
		<div className={styles.wrapper}>
			<Sidebar />
			<main>
				{posts.map(post => {
					return (
						<Post 
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					);
				})}
			</main>
		</div>
		</>
	);
};
	
export default App;
	