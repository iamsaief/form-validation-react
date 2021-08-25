import React from 'react';
import useForm from '../useForm';
import validateInfo from '../validateInfo';
import './FormSignup.scss';

const FormSignup = () => {
	const { handleChange, inputValues, handleSubmit, errors, btnDisable } = useForm(validateInfo);

	const errorClass = Object.keys(errors).length ? 'has-error' : '';

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<div className={`input-field floating-label ${errors.username && 'has-error'}`}>
					<input
						id="username"
						name="username"
						type="text"
						placeholder="&nbsp;"
						autoComplete="off"
						value={inputValues.username}
						onChange={handleChange}
					/>
					<label htmlFor="username">Your Name</label>
					{errors.username && <p className="error-hint">{errors.username}</p>}
				</div>

				<div className={`input-field floating-label ${errors.email && 'has-error'}`}>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="&nbsp;"
						autoComplete="off"
						value={inputValues.email}
						onChange={handleChange}
					/>
					<label htmlFor="email">Email Address</label>
					{errors.email && <p className="error-hint">{errors.email}</p>}
				</div>

				<div className="input-field select">
					<select defaultValue={'DEFAULT'}>
						<option value="DEFAULT" disabled>
							I would describe my type as
						</option>
						<option value="beginner">Beginner</option>
						<option value="intermediate">Intermediate</option>
						<option value="advanded">Advanded</option>
					</select>
				</div>

				<div className={`input-field floating-label password ${errors.password && 'has-error'}`}>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="&nbsp;"
						autoComplete="off"
						value={inputValues.password}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>

					{errors.password ? (
						<p className="error-hint">{errors.password}</p>
					) : (
						<p className="hint">Minimum 8 characters</p>
					)}
				</div>
				<br />

				<button className="form-input-btn" type="submit" disabled={btnDisable}>
					Sign up
				</button>
			</form>{' '}
			<br />
			<p>
				By clicking the button, you are agree to creating a free account, and to{' '}
				<a href="!#">Terms of Service</a> and a <a href="!#">Privacy Policy</a>
			</p>
		</div>
	);
};

export default FormSignup;
