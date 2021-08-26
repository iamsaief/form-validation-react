import React from 'react';

const FormStep = () => {
	return (
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
	);
};

export default FormStep;
