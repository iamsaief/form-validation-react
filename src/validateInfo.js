export default function validateInfo(values) {
	let errors = {};

	// user name
	if (!values.username.trim()) {
		errors.username = 'User Name is required.';
	}

	// email
	if (!values.email) {
		errors.email = 'Email is required!';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Please enter a valid email address.';
	}

	// select option
	if (!values.selectedType) {
		errors.selectedType = 'Select an option is required.';
	}

	// password
	if (!values.password) {
		errors.password = 'Password is required!';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be 8 characters or more.';
	}

	// confirm password
	// if (!values.password2) {
	// 	errors.password2 = 'Password is required';
	// } else if (values.password2 !== values.password) {
	// 	errors.password2 = 'Passwords do not match';
	// }

	return errors;
}
