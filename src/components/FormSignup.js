import React from 'react';
import useForm from '../useForm';
import validateInfo from '../validateInfo';
import './FormSignup.scss';

const FormSignup = () => {
	const { handleChange, inputValues, handleSubmit, errors, btnDisable } = useForm(validateInfo);

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<div className="form-inputs">
					<label className="form-label">Username</label>
					<input
						className="form-input"
						type="text"
						name="username"
						placeholder="Enter your username"
						value={inputValues.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Email</label>
					<input
						className="form-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						value={inputValues.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Password</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={inputValues.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className="form-input-btn" type="submit" disabled={btnDisable}>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default FormSignup;
