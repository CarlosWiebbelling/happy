import React from 'react'
import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import 'leaflet/dist/leaflet.css'

const BearMap = () => {
	return (
		<div id='map-lf'>
            <Map 
                center={[-23.52806, -46.34472]} 
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
			<Link to='' className='add-bear'>
				<FiPlus size={32} />
			</Link>
		</div>
	)
}

export default BearMap
