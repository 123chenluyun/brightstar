// jest.unmock('../components/header.js');
// jest.dontMock('../js/button.jsx');
// import React from 'react/addons';
// var GronkButton = require('../js/button.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<Header />', () => {

	let header;

	beforeEach(() => {
	  header = shallow( <Header /> );
	});  

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Header />, div);
	});

	it('Header has classes', () => {
	  expect(header.find('.cat-container').length).toEqual(1);
	  expect(header.find('.jumbotron').length).toEqual(1);
	  expect(header.find('img').length).toEqual(1);
	});

});