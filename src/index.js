import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './components/repo_list';
import Loader from './components/loader';
import Header from './components/header';
import axios from 'axios'

export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			repos: [],
			loaded: false		
		};	
	}

	componentWillMount() {
		axios.get("https://api.github.com/search/repositories?access_token=f07942b40d0e7e3441df9009a8434940c3d614d1&q=stars:>1000&sort=stars&order=desc&page=1&per_page=100")
				      .then(response => {
				          this.setState({repos: response.data.items, loaded: true });
		});
	}

	render(){
			let repoList = <RepoList 
					key={this.state.repos.length}
					repos={this.state.repos} />;
			return (
					<div>
						{this.state.loaded?<Header />:""}
						{this.state.loaded?repoList:<Loader className={this.state.loaded?"":"invisible"}/>}
					</div>
		)
	}
	
};

ReactDOM.render( <App />, document.querySelector('.container') || document.createElement('div'));

