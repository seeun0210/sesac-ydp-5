import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ProductDetailPage from "./pages/ProductDetailPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          {/* products/:id경로에서 id는 parameter-> 해당 경로로 오면 상세페이지 보이게 할 것 */}

          {/* 404페이지 처리는 가장 맡에 존재해야한다(위에 있는것들 아닐때) */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
