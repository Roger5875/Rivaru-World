import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({
  items,
  filter,
  setFilter,
  lightboxIndex,
  setLightboxIndex,
}) {
  const visibleItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);
  return (
    <section className="gallery section container" id="gallery">
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">
            A CLOSER LOOK <span />
          </p>
          <h2>
            Made for the
            <br />
            <em>beautifully practical.</em>
          </h2>
        </div>
        <p>
          Food, preparation and packaging, captured in the world Rivaru World is
          made for.
        </p>
      </div>
      <div className="gallery-tabs">
        {[
          "All",
          "Products",
          "Food",
          "Packaging",
          "Butter Paper",
          "Lifestyle",
        ].map((name) => (
          <button
            className={filter === name ? "selected" : ""}
            onClick={() => setFilter(name)}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <button
            className="gallery-item"
            key={item.title}
            onClick={() => setLightboxIndex(index)}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span>
              {item.category}
              <b>{item.title}</b>
            </span>
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          items={visibleItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
}

function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X />
      </button>
      <button
        className="lightbox-prev"
        onClick={() => onChange((index - 1 + items.length) % items.length)}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>
      <img src={item.image} alt={item.title} />
      <div className="lightbox-caption">
        <span>{item.category}</span>
        <b>{item.title}</b>
      </div>
      <button
        className="lightbox-next"
        onClick={() => onChange((index + 1) % items.length)}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
