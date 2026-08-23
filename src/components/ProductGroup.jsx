import { ArrowRight } from "lucide-react";

export default function ProductGroup({ title, products, onSelect, butter }) {
  return (
    <div className={`product-group ${butter ? "butter-group" : ""}`}>
      <div className="group-title">
        <h3>{title}</h3>
        <span>{products.length} formats</span>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span>
                {product.category === "Butter Paper"
                  ? "GREASEPROOF"
                  : "FOOD GRADE"}
              </span>
            </div>
            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <div className="product-spec">
                <span>
                  <b>{product.length}</b> Length
                </span>
                <span>
                  <b>{product.widths.join(" / ")}</b> Width
                </span>
              </div>
              <button className="text-link" onClick={() => onSelect(product)}>
                View product <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
