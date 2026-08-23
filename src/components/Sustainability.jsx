import { Check } from "lucide-react";

const points = [
  "100% recyclable aluminium",
  "Low-waste production processes",
  "Eco-friendly sourcing of raw materials",
  "Recycled cardboard cores",
  "Reduced energy consumption through process optimisation",
  "Supports circular-economy practices",
];

export default function Sustainability() {
  return (
    <section className="sustainability section" id="sustainability">
      <div className="container sustainability-inner">
        <div className="sustain-copy">
          <p className="eyebrow">
            A BETTER CYCLE <span />
          </p>
          <h2>
            Sustainability
            <br />
            <em>that matters.</em>
          </h2>
          <p>
            AromaShield aluminium foil products are made from 100% recyclable
            aluminium. Better materials help create better habits, from kitchen
            to recycling bin.
          </p>
          <div className="sustain-points">
            {points.map((point) => (
              <span key={point}>
                <Check size={15} />
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="recycle-orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="recycle-symbol">
            ↻<small>100%</small>
          </div>
        </div>
      </div>
      <div className="container recycle-steps">
        <div>
          <p className="eyebrow">
            HOW TO RECYCLE ALUMINIUM FOIL <span />
          </p>
          <h3>
            Make the next step
            <br />
            <em>an easy one.</em>
          </h3>
        </div>
        {[
          ["01", "Wipe", "off excess food residue"],
          ["02", "Scrunch", "foil into a ball"],
          ["03", "Place", "in the appropriate aluminium/metal recycling bin"],
        ].map(([number, title, text]) => (
          <div className="recycle-step" key={number}>
            <b>{number}</b>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
        <p className="council-note">
          Check your local council's recycling guidelines.
        </p>
      </div>
    </section>
  );
}
