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
import Global from "@/pages/Global";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/global" element={<Global />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
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
