import { ArrowDown, ArrowRight, MoveUpRight } from "lucide-react";
import foilImage from "../assets/images/products/72 Meter Gnt.png";

export default function Hero({ navigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero-shape shape-one" />
      <div className="hero-shape shape-two" />
      <div className="hero-copy reveal">
        <br></br>
        <br></br>
        <p className="eyebrow">
          FOOD-GRADE ALUMINIUM FOIL <span />
        </p>
        <h1>
          Protecting freshness.
          <br />
          <em>Preserving flavour.</em>
        </h1>
        <p className="hero-lead">
          Premium aluminium foil solutions for modern kitchens, restaurants and
          food service.
        </p>
        <p className="hero-text">
          Food-grade, reliable and 100% recyclable aluminium foil designed for
          households, catering and professional food-service applications.
        </p>
        <div className="button-row">
          <button
            className="button button-gold"
            onClick={() => navigate("products")}
          >
            Explore products <ArrowRight size={17} />
          </button>
          <button
            className="button button-ghost"
            onClick={() => navigate("contact")}
          >
            Contact us <MoveUpRight size={17} />
          </button>
        </div>
      </div>
      <div className="hero-product reveal delay-one">
        <div className="product-glow" />
        <img
          className="hero-product-image"
          src={foilImage}
          alt="Foil AromaShield 72m aluminium foil"
        />
        <div className="hero-stamp">
          <span>100%</span>
          <small>
            RECYCLABLE
            <br />
            ALUMINIUM
          </small>
        </div>
      </div>
    </section>
  );
}
