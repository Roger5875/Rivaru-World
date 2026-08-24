import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/images/logo/logo.png";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["products", "Products"],
  ["applications", "Applications"],
  ["sustainability", "Sustainability"],
  ["contact", "Contact"],
];

export default function Navbar({
  activeSection,
  menuOpen,
  setMenuOpen,
  navigate,
}) {
  return (
    <header className={`navbar ${activeSection !== "home" ? "scrolled" : ""}`}>
      <button
        className="brand"
        onClick={() => navigate("home")}
        aria-label="Rivaru World home"
      >
        <img src={logo} alt="Rivaru World - Warudkar's Company" />
      </button>
      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {links.map(([id, label]) => (
          <button
            className={activeSection === id ? "active" : ""}
            key={id}
            onClick={() => navigate(id)}
          >
            {label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => navigate("contact")}>
          Get in touch <ArrowRight size={15} />
        </button>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
