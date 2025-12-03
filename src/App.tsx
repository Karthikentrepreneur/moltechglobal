// src/App.tsx
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* ----------------------- Lazy page imports ----------------------- */
const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const ProductsGrid = lazy(() => import("@/pages/ProductsGrid"));
const RenewableFuelFeedstock = lazy(() => import("@/pages/RenewableFuelFeedstock"));
const AnimalFeedFats = lazy(() => import("@/pages/AnimalFeedFats"));
const FeedAdditives = lazy(() => import("@/pages/FeedAdditives"));
const Global = lazy(() => import("@/pages/Global"));
const Careers = lazy(() => import("@/pages/Careers"));
const Contact = lazy(() => import("@/pages/Contact"));
const CollectionFeedstocks = lazy(() => import("@/pages/CollectionFeedstocks"));

/* -------------------------- Utilities --------------------------- */
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// Small fallback while lazy pages load
function Fallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse text-gray-500">Loading…</div>
    </div>
  );
}

/* ---------------------------- App ------------------------------- */
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
          <Route path="/contact" element={<Contact />} />

          {/* Process / operations pages */}
          <Route path="/products/collection-feedstocks" element={<CollectionFeedstocks />} />

          {/* Product detail pages */}
          <Route path="/products/renewable-fuel-feedstock" element={<RenewableFuelFeedstock />} />
          <Route path="/products/animal-feed-fats" element={<AnimalFeedFats />} />
          <Route path="/products/feed-additives" element={<FeedAdditives />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center text-gray-600 bg-white">
                Page not found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
