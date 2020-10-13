import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/Landing'
import BearMap from './pages/BearMap'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={LandingPage} exact />
				<Route path='/map' component={BearMap} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
