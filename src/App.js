import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import History from './components/pages/Histry/History';
import Card from './components/Card/Card';
import Carousel from './components/Carousel';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import {ShopContextProvider} from "./context/Context"
import Cart from './components/pages/crt/Cart';

function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
    
    <Route exact path="/" element={<Home/>}>{" "}</Route>
    <Route exact path="/history" element={<History/>}>{" "}</Route>
    <Route exact path="/cart" element={<Cart/>}>{" "}</Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ShopContextProvider>
    );
}

export default App;
