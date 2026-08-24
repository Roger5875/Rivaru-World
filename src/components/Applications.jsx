import homeCookingImage from "../assets/images/gallery/home-cooking.jpg";
import wrappedFoodImage from "../assets/images/gallery/wrapped-food.jpg";
import cateringImage from "../assets/images/gallery/catering.jpg";
import grillingImage from "../assets/images/gallery/grilling.jpg";

const applications = [
  [
    "Home cooking & baking",
    "For everyday food preparation and baking.",
    homeCookingImage,
  ],
  [
    "Takeaway & food wrapping",
    "For protecting food during packaging and transport.",
    wrappedFoodImage,
  ],
  [
    "Catering & commercial kitchens",
    "For restaurants, catering businesses and professional kitchens.",
    cateringImage,
  ],
  [
    "Grilling, roasting & refrigeration",
    "For oven, grill, roasting, freezing and food storage.",
    grillingImage,
  ],
];

export default function Applications() {
  return (
    <section className="applications section" id="applications">
      <div className="container">
        <div className="section-heading light">
          <div>
            <p className="eyebrow">
              WHERE IT BELONGS <span />
            </p>
            <h2>
              Designed for everyday life
              <br />& <em>professional kitchens.</em>
            </h2>
          </div>
          <p>
            From the first fold at home to the final delivery at a customer's
            door, AromaShield helps keep food at its best.
          </p>
        </div>
        <div className="application-grid">
          {applications.map(([title, text, image], index) => (
            <article className="application-card" key={title}>
              <img src={image} alt={title} loading="lazy" decoding="async" />
              <div>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
