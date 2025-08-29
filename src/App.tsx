import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./routes/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Global from "./pages/Global";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        // subtle accents + dark gradient
        background:
          "radial-gradient(1200px 600px at 30% -10%, rgba(99, 179, 237, 0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(99, 102, 241, 0.18), transparent 60%), linear-gradient(180deg, #0b0c10 0%, #141421 100%)",
      }}
    >
      <Header />
      <ScrollToTop />
      {/* space for your fixed header pill */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/global" element={<Global />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* optional footer */}
      {/* <footer id="footer" className="mt-20 py-10 text-white/60">…</footer> */}
    </div>
  );
}
