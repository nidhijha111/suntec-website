import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Claims from "./pages/claims";
import Renew from "./pages/renew";
import Aboutus from "./pages/aboutus";
import Support from "./pages/support";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/renew" element={<Renew />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
