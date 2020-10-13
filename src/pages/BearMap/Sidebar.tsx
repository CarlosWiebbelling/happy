import React from 'react'
import logo from '../../static/images/bear.png'

const Sidebar = () => {
	return (
		<div id='sidebar'>
			<aside>
				<header>
					<img src={logo} width='100px' alt='' />
					<h2>Where did the bear appear?</h2>
					<p>There are many lost bears in the city</p>
				</header>
				<footer>
					<strong>Porto Alegre</strong>
					<span>Rio Grande do Sul</span>
				</footer>
			</aside>
		</div>
	)
}

export default Sidebar
