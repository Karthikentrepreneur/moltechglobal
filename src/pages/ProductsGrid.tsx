import ProductsServices from "@/components/ProductsServices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductsGrid() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <ProductsServices />
      </main>
      <Footer />
    </div>
  );
}
