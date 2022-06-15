import React, { useState } from 'react';
import useForm from '../useForm';
import validateInfo from '../validateInfo';
import './FormSignup.scss';
import { SvgIconEye, SvgIconEyeSlash } from './SvgIcons';

const FormSignup = () => {
	const { handleChange, inputValues, handleSubmit, errors, submitDisable } = useForm(validateInfo);

	const [togglePasswordView, setTogglePasswordView] = useState(true);
	const handlePasswordView = () => {
		setTogglePasswordView(!togglePasswordView);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form-signup">
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

				<div className={`input-field select ${errors.selectedType && 'has-error'}`}>
					<select name="selectedType" value={inputValues.selectedType} onChange={handleChange}>
						<option value="">I would describe my type as</option>
						<option value="beginner">Beginner</option>
						<option value="intermediate">Intermediate</option>
						<option value="advanded">Advanded</option>
					</select>
					{errors.selectedType && <p className="error-hint">{errors.selectedType}</p>}
				</div>

				<div className={`input-field floating-label password ${errors.password && 'has-error'}`}>
					<input
						id="password"
						name="password"
						type={`${togglePasswordView ? 'password' : 'text'}`}
						placeholder="&nbsp;"
						autoComplete="off"
						value={inputValues.password}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>

					{togglePasswordView ? (
						<span className="icon-toggle-pass" onClick={handlePasswordView}>
							<SvgIconEye />
						</span>
					) : (
						<span className="icon-toggle-pass" onClick={handlePasswordView}>
							<SvgIconEyeSlash />
						</span>
					)}

					{errors.password ? (
						<p className="error-hint">{errors.password}</p>
					) : (
						<p className="hint">Minimum 8 characters</p>
					)}
				</div>
				<br />
				<br />
				<button className="form-btn-submit" type="submit" disabled={submitDisable}>
					Next
				</button>
			</form>{' '}
			<br />
		</>
	);
};

export default FormSignup;
