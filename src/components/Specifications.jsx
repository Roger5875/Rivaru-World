import { Check } from "lucide-react";
import kitchenImage from "../assets/images/food/professional-kitchen.jpg";

function Spec({ title, items }) {
  return (
    <div className="spec-card">
      <h3>{title}</h3>
      {items.map((item) => (
        <div key={item}>
          <Check size={15} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function Specifications() {
  return (
    <section className="specs section container">
      <div className="specs-intro">
        <p className="eyebrow dark">
          PRODUCT SPECIFICATIONS <span />
        </p>
        <h2>
          Performance you
          <br />
          <em>can feel.</em>
        </h2>
        <p>
          A dependable protective layer between food and the world around it.
          Built for the pace of real kitchens.
        </p>
        <div className="specs-image">
          <img
            src={kitchenImage}
            alt="Professional kitchen preparation"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="spec-grid">
        <Spec
          title="Material & composition"
          items={[
            "Aluminium alloy: 8011 / 8079 / 1235 (food-grade)",
            "Temper: Soft (O)",
            "Thickness: 11 micron (± manufacturing tolerance)",
            "Surface finish: Clean, smooth, odourless and non-toxic",
            "Core: Food-safe recycled cardboard",
          ]}
        />
        <Spec
          title="Performance properties"
          items={[
            "Heat resistance: Suitable for oven use up to 660°C",
            "Freezer safe: Yes",
            "Barrier: Protects from moisture, light, air & contamination",
            "Strength: High tear resistance",
            "Food safety: Compliant with UK Food-Contact Standards",
          ]}
        />
      </div>
    </section>
  );
}
