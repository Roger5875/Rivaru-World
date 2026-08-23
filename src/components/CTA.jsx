import { ArrowRight, MoveUpRight } from "lucide-react";

export default function CTA({ navigate }) {
  return (
    <section className="final-cta">
      <div className="container">
        <p className="eyebrow">
          THE NEXT STEP <span />
        </p>
        <h2>
          Premium food packaging
          <br />
          starts with the <em>right material.</em>
        </h2>
        <p>Discover the Foil AromaShield range from Rivaru World.</p>
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
    </section>
  );
}
