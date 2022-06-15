import React from 'react';
import FormSignup from './components/FormSignup';

import './scss/index.scss';
import FormStep from './components/FormStep';
import FormHeader from './components/FormHeader';
import FormFooter from './components/FormFooter';

function App() {
	return (
		<div className="main-wrapper">
			<main className="primary-content-area">
				<div>
					<FormStep />
					<FormHeader />
					<br />
					<FormSignup />
					<br />
					<FormFooter />
				</div>
			</main>
			<aside className="secondary-content-area">
				<div>
					<h2>Dummy Heading</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ratione asperiores. Minus
						nostrum, ipsa eligendi cupiditate magni id repudiandae explicabo!
					</p>
				</div>
			</aside>
		</div>
	);
}

export default App;
