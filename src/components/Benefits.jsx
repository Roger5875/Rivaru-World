import {
  CircleCheck,
  Leaf,
  Package,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";

const benefits = [
  [ShieldCheck, "Food grade", "Safe for food-contact applications"],
  [Thermometer, "Heat resistant", "Suitable for oven applications"],
  [Package, "Freezer safe", "Maintains strength at low temperatures"],
  [
    Zap,
    "Barrier protection",
    "Helps protect food from moisture, light and air",
  ],
  [
    CircleCheck,
    "Strong & durable",
    "High tear resistance for wrapping and cooking",
  ],
  [Leaf, "100% recyclable", "Made from recyclable aluminium"],
];

export default function Benefits() {
  return (
    <section className="benefits section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">
            WHY AROMASHIELD <span />
          </p>
          <h2>
            Small details.
            <br />
            <em>Big difference.</em>
          </h2>
        </div>
      </div>
      <div className="benefit-grid">
        {benefits.map(([Icon, title, text]) => (
          <div className="benefit" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
