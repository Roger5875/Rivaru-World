import { ArrowRight, Package } from "lucide-react";
import foilImage from "../assets/images/products/30 meter.png";

function SignatureProduct({ onSelect, product }) {
  return (
    <section className="signature section container">
      <div className="signature-copy">
        <p className="eyebrow dark">
          THE SIGNATURE PRODUCT <span />
        </p>
        <h2>
          Foil <em>AromaShield™</em>
        </h2>
        <p className="signature-sub">
          Premium aluminium foil for home, cooking, catering & professional use.
        </p>
        <p>
          Designed to preserve food moisture, flavour and aroma while providing
          a hygienic protective barrier during cooking, storage and transport.
        </p>
        <button className="text-link" onClick={() => onSelect(product)}>
          Discover the range <ArrowRight size={17} />
        </button>
      </div>
      <div className="signature-visual">
        <img
          src={foilImage}
          alt="Aluminium foil protecting a prepared meal"
          loading="lazy"
          decoding="async"
        />
        <div className="feature-float">
          <Package />
          <span>
            FOIL
            <br />
            <b>AROMASHIELD</b>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SignatureProduct;
