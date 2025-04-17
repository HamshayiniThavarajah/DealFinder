import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import ComparePrices from './pages/ComparePrices';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/add">Add Product</Link> | 
          <Link to="/compare">Compare Prices</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/compare" element={<ComparePrices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
