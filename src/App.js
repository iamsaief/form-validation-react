import React from 'react';
import FormSignup from './components/FormSignup';

import './styles/helper.scss';
import './App.scss';

function App() {
	return (
		<div className="main-wrapper">
			<main className="primary-content-area">
				<div>
					<div className="form-step">
						<p>
							Step 1 of 3
							<span className="step-dots">
								<span className="step active"></span>
								<span className="step"></span>
								<span className="step"></span>
							</span>
						</p>
					</div>
					<h3>Let's set up your account</h3>
					<p>
						Already have an account? <a href="!#">Sign in</a>
					</p>

					<FormSignup />

					<p>
						By clicking the button, you are agree to creating a free account, and to <a href="!#">Terms of Service</a>{' '}
						and a <a href="!#">Privacy Policy</a>
					</p>
				</div>
			</main>
			<aside className="secondary-content-area">
				<div>
					<h2>Dummy Heading</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ratione asperiores. Minus nostrum, ipsa
						eligendi cupiditate magni id repudiandae explicabo!
					</p>
				</div>
			</aside>
		</div>
	);
}

export default App;
