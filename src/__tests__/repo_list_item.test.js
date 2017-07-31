import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from '../components/repo_list_item';
import { mount } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

describe('<RepoListItem />', () => {

	let repo_list_item, props;

	beforeEach(() => {
	  props = {
	    repo: {id:1, contributors_url:"www.test.com",  stargazers_count: 100, name: "test", description: "test description" }
	  };
	  repo_list_item = mount(<table><tbody><RepoListItem {...props}/></tbody></table>); 
	}); 

	it('renders correctly', () => {
	  const repo_list_item = renderer.create(
	   <table><tbody><RepoListItem {...props}/></tbody></table>
	  ).toJSON();
	  expect(repo_list_item).toMatchSnapshot();
	});

	it('calls componentWillMount', () => {
	   sinon.spy(RepoListItem.prototype, 'componentWillMount');
	   repo_list_item = mount(<table><tbody><RepoListItem {...props}/></tbody></table>); 
	   expect(RepoListItem.prototype.componentWillMount.calledOnce).toEqual(true);
	 });

	it('RepoListItem has proper elements', () => {
	  expect(repo_list_item.find('tr').length).toEqual(1);
	  expect(repo_list_item.find('td').length).toEqual(3);
	  expect(repo_list_item.find('h4').length).toEqual(1);
	});

});