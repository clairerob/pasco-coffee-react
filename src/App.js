import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './App.css';
import Header from './components/Header';
import TheCoffeePage from './pages/TheCoffeePage';

const App = () => {
    return (
        <div>
            <Header />
            <Routes >
                <Route path='/' element={<HomePage/>} />
                <Route path='/menu' element={<MenuPage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/coffee' element={<CoffeePage/>} />
                <Route path='/coffee-map' element={<CoffeeMap/>} />
                <Route path='/coffee-classes' element={<CoffeeClasses />} />
                <Route path='/contact' element={<ContactPage/>} />
                <Route path='/order' element={<OrderPage />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;