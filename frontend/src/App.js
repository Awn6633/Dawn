import React from 'react'

import TopNav from './components/navbar/navbar.component'

import Footer from './components/footer/footer.components'

import { Route } from 'react-router-dom'
import HomePage from './pages/Home/home-page'
import ComingSoon from './components/comming-soon/coming-soon.component'
// axios.defaults.withCredentials = true

function App() {
	return (
		<div className='rtl'>
			<TopNav />

			<Route component={HomePage} exact path='/' />
			<Route component={ComingSoon} exact path='/soon' />

			<Footer />
		</div>
	)
}

export default App
