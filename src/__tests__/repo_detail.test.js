import React from 'react';
import ReactDOM from 'react-dom';
import RepoDetail from '../components/repo_detail.js';
import { mount,shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<RepoDetail />', () => {

  let repo_detail, props;

  beforeEach(() => {
    props = {
      id:1, 
      details: [{avatar_url:"url1.com", url:"url1.com", login:"login1"},
                {avatar_url:"url2.com", url:"url2.com", login:"login2"},
                {avatar_url:"url3.com", url:"url3.com", login:"login3"}]

    };
    repo_detail = mount(<RepoDetail {...props}/> ); 
  });  

  it('renders correctly', () => {
    const repo_detail = renderer.create(
     <RepoDetail {...props}/>
    ).toJSON();
    expect(repo_detail).toMatchSnapshot();
  });

  it('allows us to set props', () => {
      expect(repo_detail.props()).toEqual(props);
  });

  it('RepoDetail has 3 contrib-cells', () => {
    expect(repo_detail.find('.contrib-link').length).toEqual(3);
    expect(repo_detail.find('.contrib-cell').length).toEqual(3);
  });

});