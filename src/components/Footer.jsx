import logo from "../assets/images/logo/logo.png";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <button
            className="brand footer-brand"
            onClick={() => navigate("home")}
          >
            <img src={logo} alt="Rivaru World - Warudkar's Company" />
          </button>
          <p>
            Premium aluminium household
            <br />
            and catering products.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          {[
            "about",
            "products",
            "applications",
            "sustainability",
            "contact",
          ].map((link) => (
            <button key={link} onClick={() => navigate(link)}>
              {link[0].toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <h4>Products</h4>
          <button onClick={() => navigate("products")}>Foil AromaShield</button>
          <button onClick={() => navigate("products")}>Butter Paper</button>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Pune, India</p>
          <a href="tel:+447385814167">+44 7385814167</a>
          <a href="tel:+912029512607">+91 20 2951 2607</a>
          <a href="mailto:rivaru.world@gmail.com">rivaru.world@gmail.com</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Rivaru World. All Rights Reserved.</span>
        <span>Made for freshness. Designed for the future.</span>
        <a
          href="https://portfolio-smoky-two-41.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Created by Aniruddha Deshpande
        </a>
      </div>
    </footer>
  );
}
