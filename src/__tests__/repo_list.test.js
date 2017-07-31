import React from 'react';
import ReactDOM from 'react-dom';
import RepoList from '../components/repo_list.js';
import { mount,shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<RepoList />', () => {

  let props, repo_list;

  beforeEach(() => {
    props = {
        repos: [{id:1, contributors_url:"www.test.com",  stargazers_count: 100, name: "test", description: "test description" }]
    };
    repo_list = mount(<RepoList {...props}/> );   
  });  

  it('renders correctly', () => {
    const repo_list = renderer.create(
     <RepoList {...props}/>
    ).toJSON();
    expect(repo_list).toMatchSnapshot();
  });

  it('allows us to set props', () => {
      expect(repo_list.props()).toEqual(props);
  });

  it('has proper classes and elements', () => {
      expect(repo_list.find('.col').length).toEqual(1);
      expect(repo_list.find('.table .table-stripped .table-hover').length).toEqual(1);  
      expect(repo_list.find('.stargazers-th').text()).toEqual("Stargazers");  
      expect(repo_list.find('.name-th').text()).toEqual("Name");  
      expect(repo_list.find('.contributors-th').text()).toEqual("Top Contributors");  
  });


});