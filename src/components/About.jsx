import { Leaf, ShieldCheck } from "lucide-react";
import aboutImage from "../assets/images/food/kitchen-ingredients.jpg";

export default function About() {
  return (
    <section className="about section container" id="about">
      <div className="about-image image-frame">
        <img
          src={aboutImage}
          alt="Fresh ingredients prepared in a modern kitchen"
        />
        <span className="image-note">
          SINCE
          <br />
          <b>2023</b>
        </span>
      </div>
      <div className="about-copy">
        <p className="eyebrow dark">
          THE RIVARU WORLD STORY <span />
        </p>
        <h2>
          Material that moves
          <br />
          <em>with your ambition.</em>
        </h2>
        <p>
          Rivaru World is a trusted manufacturer of high-quality aluminium
          household and catering products, proudly based in India and supplying
          customers across the UK and international markets.
        </p>
        <p>
          Established in 2023, we are committed to delivering safe, reliable and
          premium food-contact materials for homes, restaurants, takeaways,
          bakeries and food-service businesses.
        </p>
        <div className="mini-highlights">
          <div>
            <ShieldCheck />
            <span>
              Safe, food-contact
              <br />
              materials
            </span>
          </div>
          <div>
            <Leaf />
            <span>
              Quality with
              <br />
              responsibility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
