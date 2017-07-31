import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../components/loader.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Loader />', () => {

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Loader />, div);
	});

	it('renders correctly', () => {
	  const loader = renderer.create(
	   <Loader />
	  ).toJSON();
	  expect(loader).toMatchSnapshot();
	});

	it('Loader has classes', () => {
	  const header = shallow(
	    <Loader />
	  );
	  expect(header.find('.loader-container').length).toEqual(1);
	  expect(header.find('.sk-circle').length).toEqual(1);
	});

});