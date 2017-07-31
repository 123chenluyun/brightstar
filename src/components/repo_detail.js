import React from 'react';

const RepoContribDetail = contributors => {
		return(
			<div key={contributors.id}>

				<div className='contrib-cell'>
					<img className='avatar' src={contributors.details[0].avatar_url} />
					<a className='contrib-link' href={contributors.details[0].url}>#1 {contributors.details[0].login}</a>
				</div> 

				<div className='contrib-cell'>
					<img className='avatar' src={contributors.details[1].avatar_url} />
					<a className='contrib-link'href={contributors.details[1].url}>#2 {contributors.details[1].login}</a>
				</div>

				<div className='contrib-cell'>
					<img className='avatar' src={contributors.details[2].avatar_url} />
					<a className='contrib-link' href={contributors.details[2].url}>#3 {contributors.details[2].login}</a>
				</div>

			</div>
		);
}

export default RepoContribDetail;