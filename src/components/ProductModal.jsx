import { ArrowRight, X } from "lucide-react";

export default function ProductModal({ product, onClose, onContact }) {
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X />
        </button>
        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-content">
          <p className="eyebrow dark">
            {product.category} <span />
          </p>
          <h2 id="modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="modal-specs">
            <div>
              <b>Length</b>
              <span>{product.length}</span>
            </div>
            <div>
              <b>Width</b>
              <span>{product.widths.join(" / ")}</span>
            </div>
            <div>
              <b>Thickness</b>
              <span>{product.thickness.join(" / ")}</span>
            </div>
          </div>
          <p className="modal-label">Applications</p>
          <div className="application-tags">
            {product.applications.map((app) => (
              <span key={app}>{app}</span>
            ))}
          </div>
          <button className="button button-navy" onClick={onContact}>
            Enquire about this product <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
