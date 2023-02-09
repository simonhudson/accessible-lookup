import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import useIsMount from '~/utilities/useIsMount';
import { Wrapper, Label, Input } from './styles';
import CustomPropTypes from '~/utilities/customPropTypes';

const AccessibleLookup = ({ label, inputId, errorMessage }) => {
	const isMount = useIsMount();
	const accessibleLookupRef = createRef();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isMount) {
			// Do stuff on mount
			setIsLoading(false);
		}
	}, []);

	return (
		<Wrapper>
			<Label></Label>
			<Input />
		</Wrapper>
	);
};

AccessibleLookup.propTypes = {
	label: PropTypes.string.isRequired,
	inputId: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
	minQueryLength: CustomPropTypes.positiveNumber({ isRequired: true }),
};

export default AccessibleLookup;
