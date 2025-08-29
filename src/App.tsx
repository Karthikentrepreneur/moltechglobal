import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import ProductsGrid from "@/pages/ProductsGrid";
import BiodieselFeedstocks from "@/pages/BiodieselFeedstocks";
import FattyAcids from "@/pages/FattyAcids";
import SoapNoodles from "@/pages/SoapNoodles";
import AnimalFeedFats from "@/pages/AnimalFeedFats";
import Glycerin from "@/pages/Glycerin";
import FeedAdditives from "@/pages/FeedAdditives";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
<Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/products/biodiesel-feedstocks" element={<BiodieselFeedstocks />} />
        <Route path="/products/fatty-acids" element={<FattyAcids />} />
        <Route path="/products/soap-noodles" element={<SoapNoodles />} />
        <Route path="/products/animal-feed-fats" element={<AnimalFeedFats />} />
        <Route path="/products/glycerin" element={<Glycerin />} />
        <Route path="/products/feed-additives" element={<FeedAdditives />} />
      </Routes>
    </Router>
  );
};

export default App;
