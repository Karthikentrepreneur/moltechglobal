// src/App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* ----------------------- Lazy page imports ----------------------- */
const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const ProductsGrid = lazy(() => import("@/pages/ProductsGrid"));
const BiodieselFeedstocks = lazy(() => import("@/pages/BiodieselFeedstocks"));
const FattyAcids = lazy(() => import("@/pages/FattyAcids"));
const SoapNoodles = lazy(() => import("@/pages/SoapNoodles"));
const AnimalFeedFats = lazy(() => import("@/pages/AnimalFeedFats"));
const Glycerin = lazy(() => import("@/pages/Glycerin"));
const FeedAdditives = lazy(() => import("@/pages/FeedAdditives"));
const Global = lazy(() => import("@/pages/Global"));
const Careers = lazy(() => import("@/pages/Careers"));
const Blog = lazy(() => import("@/pages/Blog"));
const Contact = lazy(() => import("@/pages/Contact"));

/* -------------------------- Utilities --------------------------- */
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

// Small fallback while lazy pages load
function Fallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading…</div>
    </div>
  );
}

/* ---------------------------- App ------------------------------- */
import { useEffect } from "react";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsGrid />} />
          <Route path="/global" element={<Global />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product detail pages */}
          <Route path="/products/biodiesel-feedstocks" element={<BiodieselFeedstocks />} />
          <Route path="/products/fatty-acids" element={<FattyAcids />} />
          <Route path="/products/soap-noodles" element={<SoapNoodles />} />
          <Route path="/products/animal-feed-fats" element={<AnimalFeedFats />} />
          <Route path="/products/glycerin" element={<Glycerin />} />
          <Route path="/products/feed-additives" element={<FeedAdditives />} />

          {/* 404 */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-gray-600">Page not found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
