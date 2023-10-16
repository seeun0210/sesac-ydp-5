import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Photos from './pages/Photos';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/photo" element={<Photos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
