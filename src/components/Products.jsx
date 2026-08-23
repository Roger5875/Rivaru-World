import ProductGroup from "./ProductGroup";

export default function Products({
  foilProducts,
  butterPaperProducts,
  onSelect,
}) {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              THE RANGE <span />
            </p>
            <h2>
              Products made for
              <br />
              <em>every table.</em>
            </h2>
          </div>
          <p>
            Reliable food-contact solutions, thoughtfully made for home cooks,
            food businesses and professional kitchens.
          </p>
        </div>
        <ProductGroup
          title="Aluminium Foil"
          products={foilProducts}
          onSelect={onSelect}
        />
        <ProductGroup
          title="Foil AromaShield Butter Paper"
          products={butterPaperProducts}
          onSelect={onSelect}
          butter
        />
      </div>
    </section>
  );
}
