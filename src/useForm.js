import { useState } from 'react';

const useForm = (validateInfo) => {
	const [inputValues, setInputValues] = useState({
		username: '',
		email: '',
		userType: '',
		password: '',
		password2: '',
	});

	const [errors, setErrors] = useState({});
	const [btnDisable, setBtnDisable] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputValues({
			...inputValues,
			[name]: value,
		});

		setErrors(validateInfo(inputValues));

		if (Object.keys(errors).length) {
			setBtnDisable(true);
		} else {
			setBtnDisable(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validateInfo(inputValues));
	};

	return { handleChange, inputValues, handleSubmit, errors, btnDisable };
};

export default useForm;
