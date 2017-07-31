import React from 'react';
import RepoListItem from './repo_list_item';

const RepoList = props => {	
	// if(props && props.repos.length){
	// 	const videoItems1 = props.repos.slice(0,24);
	// 	const videoItems2 = props.repos.slice(25,50);
	// 	const videoItems3 = props.repos.slice(51,)
	// }
	const repoItem = props && props.repos.map((repo) => {
		return (
			<RepoListItem 
				key={repo.id}
				repo={repo} 
			/>
		);
		
	});

	return (
		<div className="col">
			<table className="table table-stripped table-hover">
				<tbody>
					<tr>
						<th className='stargazers-th'>Stargazers</th>
						<th className='name-th'>Name</th>
						<th className='contributors-th'>Top Contributors</th>
					</tr>
					{repoItem}
				</tbody>
				
			</table>
		</div>
	);
}

export default RepoList;