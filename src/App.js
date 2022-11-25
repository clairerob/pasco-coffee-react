import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import TheCoffeePage from './pages/TheCoffeePage'
import CoffeeMapPage from './pages/CoffeeMapPage'
import CoffeeClassesPage from './pages/CoffeeClassesPage'
import ContactPage from './pages/ContactPage'
import OrderPage from './pages/OrderPage'
import ScrollToTop from './components/ScrollToTop'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRoasteries } from './features/roasteries/roasteriesSlice'
import { fetchDrinks } from './features/menu/drinksSlice'
import { fetchClasses } from './features/coffeeclasses/classesSlice'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchRoasteries())
		dispatch(fetchDrinks())
		dispatch(fetchClasses())
	}, [dispatch])

	return (
		<div className='app'>
			<ScrollToTop>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/menu' element={<MenuPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/coffee' element={<TheCoffeePage />} />
					<Route path='/coffee-map' element={<CoffeeMapPage />} />
					<Route path='/coffee-classes' element={<CoffeeClassesPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/order' element={<OrderPage />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</div>
	)
}

export default App
