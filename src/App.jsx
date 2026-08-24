import { useEffect, useState } from "react";
import { butterPaperProducts, foilProducts } from "./data/products";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Mission from "./components/Mission";
import SignatureProduct from "./components/SignatureProduct";
import Products from "./components/Products";
import Specifications from "./components/Specifications";
import Applications from "./components/Applications";
import Benefits from "./components/Benefits";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
      />
      <main>
        <Hero navigate={navigate} />
        <Stats />
        <About />
        <Mission />
        <SignatureProduct
          product={foilProducts[3]}
          onSelect={setSelectedProduct}
        />
        <Products
          foilProducts={foilProducts}
          butterPaperProducts={butterPaperProducts}
          onSelect={setSelectedProduct}
        />
        <Specifications />
        <Applications />
        <Benefits />
        <Sustainability />
        <Contact />
        <CTA navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onContact={() => {
            setSelectedProduct(null);
            navigate("contact");
          }}
        />
      )}
    </div>
  );
}
