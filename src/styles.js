import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Typeahead } from 'react-bootstrap-typeahead';

const Wrapper = styled.div``;

const Label = styled.label``;

const Input = styled(Typeahead)`
	.dropdown-item {
		border-bottom: 1px solid red;
		color: #555;
		display: block;
		font-weight: normal;
		padding: 0.25rem 1.5rem 0.25rem 0.625rem;
		text-decoration: none;
		width: 100%;

		&:first-child,
		&:last-child {
			border-radius: 0;
		}

		&.active,
		&:active,
		&:hover {
			background-color: #555;
			color: #fff;
		}

		mark {
			background-color: red;
			padding: 0 0.1em;
			display: inline-block;
		}
	}

	.dropdown-menu {
		background-color: #fff;
		border-radius: 0.25rem;
		box-shadow: 0 0.125rem 0.25rem 0 #ddd;
		margin: 0.125rem 0 0;
		padding: 0.5rem 0;
		z-index: 1;
	}
`;

module.exports = { Wrapper, Label, Input };
