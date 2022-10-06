import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';   
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import TheCoffeePage from './pages/TheCoffeePage';
import CoffeeMapPage from './pages/CoffeeMapPage';
import CoffeeClassesPage from './pages/CoffeeClassesPage';
import OrderPage from './pages/OrderPage';

const App = () => {
    return (
        <div>
            <Header />
            <Routes >
                <Route path='/' element={<HomePage/>} />
                <Route path='/menu' element={<MenuPage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/coffee' element={<TheCoffeePage/>} />
                <Route path='/coffee-map' element={<CoffeeMapPage/>} />
                <Route path='/coffee-classes' element={<CoffeeClassesPage/>} />
                <Route path='/order' element={<OrderPage />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;