import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Product';
import ProductOverview from './pages/ProductOverview';
import Resources from './pages/Resources';
import Solutions from './pages/Solutions';
import Company from './pages/Company';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-overveiw" element={<ProductOverview />} />
        <Route path="/product" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
