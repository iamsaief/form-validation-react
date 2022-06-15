import { useState } from 'react';

const useForm = (validateInfo) => {
	const [inputValues, setInputValues] = useState({
		username: '',
		email: '',
		selectedType: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [submitDisable, setSubmitDisable] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputValues({
			...inputValues,
			[name]: value,
		});

		setErrors(validateInfo(inputValues));

		// to toggle disable submit btn
		if (Object.keys(errors).length) {
			setSubmitDisable(true);
		} else {
			setSubmitDisable(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateInfo(inputValues));

		if (!Object.keys(errors).length) {
			console.log('✅ Submitted successfully 🎉', inputValues);
		}
	};

	return { handleChange, inputValues, handleSubmit, errors, submitDisable };
};

export default useForm;
