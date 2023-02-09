import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { expect as chaiExpect } from 'chai';

const mountWithTheme = (childToMount) => {
	return mount(shallow(<ThemeProvider>{childToMount}</ThemeProvider>).get(0));
};

const assertPropsPassed = (props, expected) => {
	if (expected) {
		Object.keys(expected).forEach((key) => {
			chaiExpect(props, 'No key found in props for ' + key).to.have.property(key);
			chaiExpect(props[key], 'Values not equal for key ' + key).to.deep.equal(expected[key]);
		});
	}
};

module.exports = {
	mountWithTheme,
	assertPropsPassed,
};
