import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

describe('<App />', () => {

	let app, props;

	beforeEach(() => {
	  props = [
	  	{id:1, contributors_url:"www.test.com",  stargazers_count: 100, name: "test", description: "test description" },
	  	{id:2, contributors_url:"www.test2.com",  stargazers_count: 99, name: "test2", description: "test2 description" }
	  ];
	  app = shallow(<App />); 
	}); 

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App {...props} />, div);
	});

	it('renders loader to start', () => {
	  const app = renderer.create(
	   <App />
	  ).toJSON();
	  expect(app).toMatchSnapshot();
	});

	it('renders repos and header after setting state', () => {
	  const app = shallow(<App />);
	  app.setState({
		  repos: [
		  	{id:1, contributors_url:"www.test.com",  stargazers_count: 100, name: "test", description: "test description" },
		  	{id:2, contributors_url:"www.test2.com",  stargazers_count: 99, name: "test2", description: "test2 description" }
		  ],
		  loaded: true
	  });
	  expect(app).toMatchSnapshot();
	});

	it('calls componentWillMount', () => {
	   sinon.spy(App.prototype, 'componentWillMount');
	   app = mount(<App {...props}/>); 
	   expect(App.prototype.componentWillMount.calledOnce).toEqual(true);
	 });

	it('Index has proper elements', () => {
		expect(app.find('.invisible').length).toEqual(1);
		expect(app.text()).toEqual("<Loader />");
	});

});