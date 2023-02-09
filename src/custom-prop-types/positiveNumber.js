module.exports =
	(options = { isRequired: false }) =>
	(props, propName, componentName) => {
		const { isRequired } = options;
		const propValue = props[propName];

		let ERROR_MSG;

		if (isRequired && !propValue)
			ERROR_MSG = `Missing required value for prop "${propName}" passed to "${componentName}".`;
		else if (!!propValue && (isNaN(propValue) || propValue < 0))
			ERROR_MSG = `Value of "${propName}" must be a number greater than zero.`;

		if (ERROR_MSG) return new Error(ERROR_MSG);
	};
