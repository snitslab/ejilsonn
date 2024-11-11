//import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import { CartProvider} from './Context/CartContext';

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
