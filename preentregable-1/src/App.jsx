import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ProductPage from './paginas/ProductPage';
import HomeLayout from './Layouts/HomeLayout';
import BasicLayout from './Layouts/BasicLayout';
import CartWidget from './components/CartWidget';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity) => {
    setCartCount(cartCount + quantity);
  };
  const resetCartCount = () => {
    setCartCount(0);  
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout cartCount={cartCount} resetCartCount={resetCartCount}> 
              <ItemListContainer welcomeMessage="¡Bienvenido a Fish&CO!" />
            </HomeLayout>
          }
        />
        <Route
          path="/productos"
          element={
            <BasicLayout cartCount={cartCount} resetCartCount={resetCartCount}>  
              <ProductPage addToCart={addToCart} />
            </BasicLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;