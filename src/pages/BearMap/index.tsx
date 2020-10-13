import React from 'react'

import Sidebar from './Sidebar'
import Map from './Map'

import './styles.scss'

const BearMap = () => {
	return (
		<div className="map-wrapper">
			<Sidebar />
			<Map />
		</div>
	)
}

export default BearMap
