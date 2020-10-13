import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../static/images/bear.png'
import { FiArrowRight } from 'react-icons/fi'

import './styles.scss'

const Landing = () => {
	return (
		<div id='landing-page' className='d-flex'>
			<div className='content-wrapper'>
                <div className='d-flex'>
                    <img src={logo} width='100px' alt='Happy' />
                    <h1>Happy Bear</h1>
                </div>
				<main>
                    <h1>My fucking beauty Happy Bear</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda hic minus molestiae amet? Aliquam necessitatibus,
						consectetur officiis
					</p>
				</main>

				<div className='location'>
					<strong>Porto Alegre</strong>
					<span>Rio Grande do Sul</span>
				</div>

				<Link to='/map' className='enter-app'>
					<FiArrowRight size={26} />
				</Link>
			</div>
		</div>
	)
}

export default Landing
