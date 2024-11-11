//import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import { CartProvider, CartContext, cartCount} from './Context/CartContext';
import { useContext } from 'react';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Layout />
      </CartProvider>
    </div>
  );
}

export default App;
