import React, {Component} from 'react';
import GithubCat from 'react-icons/lib/go/mark-github';
import { Parallax, Background } from 'react-parallax';


const Header = () => {	
	return (
		<div>
		  	<Parallax className="jumbotron media" strength={300}>
		  		<Background>
		  				    <img src="https://images.unsplash.com/photo-1480422080719-4d25a4c7e22c?dpr=2&auto=format&fit=crop&w=900&h=300&q=80&cs=tinysrgb&crop="/>
		  		</Background>
			  	<div className="media-left">
			  		<div className='cat-container' data-0="">
			  			<GithubCat />
			  		</div>
			  	</div>
			  	<div className="media-body">
			  		<h2>Top 100 starred Github Repositories of all time</h2>
			  		<p>There are the most popular Github repos, happy hacking!</p>
			  	</div>

		  	</Parallax>
		 </div>
		  
	);_
};

export default Header