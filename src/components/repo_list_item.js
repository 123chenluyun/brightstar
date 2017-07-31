import React, {Component} from 'react';
import Star from 'react-icons/lib/go/star';
import RepoContribDetail from './repo_detail';
import axios from 'axios';

class RepoListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repo: props.repo,
			contributors: []
		};
	}

	componentWillMount() {
		axios.get(this.state.repo.contributors_url + "?access_token=f07942b40d0e7e3441df9009a8434940c3d614d1")
			      .then(response => {
			      	  if(response.status !== 403){
			      	  	this.setState({contributors: response.data.slice(0,3)});
			      	  }
		});
	}

	render(){
		return (
			<tr key={this.state.repo.id}>
				<td className="star-cell"><Star />{this.state.repo.stargazers_count.toLocaleString()}</td>
				<td className="repo-details-cell"><h4>{this.state.repo.name}</h4>
				{this.state.repo.description}
				</td>
				<td className="contributors-cell">{this.state.contributors.length? <RepoContribDetail details={this.state.contributors} />:null}</td>
			</tr>
		);
	}
	
}

export default RepoListItem

