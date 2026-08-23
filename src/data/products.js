import foodImage from "../assets/images/food/fresh-food.jpg";
import bakingImage from "../assets/images/food/baking.jpg";
import packagingImage from "../assets/images/gallery/packaging.jpg";
import butterPaperImage from "../assets/images/gallery/butter-paper.jpg";
import wrappedFoodImage from "../assets/images/gallery/wrapped-food.jpg";

const foilImage = "/images/products/foil-72m.png";

export const foilProducts = ["6m", "9m", "18m", "30m", "40m", "50m", "72m"].map(
  (length) => ({
    name: `Foil AromaShield ${length}`,
    category: "Aluminium Foil",
    length,
    widths: ["30cm", "45cm", "60cm"],
    thickness: ["11μm", "18μm"],
    applications: ["Home cooking", "Baking", "Food wrapping", "Catering"],
    image: foilImage,
    description:
      "Food-grade aluminium foil designed to preserve moisture, flavour and aroma while protecting food during cooking, storage and transport.",
  }),
);

export const butterPaperProducts = ["20m", "25m", "50m", "75m"].map(
  (length) => ({
    name: `Butter Paper ${length}`,
    category: "Butter Paper",
    length,
    widths: ["30cm"],
    thickness: ["Food-safe greaseproof paper"],
    applications: ["Baking", "Cookies", "Cakes", "Sandwich wrapping"],
    image: bakingImage,
    description:
      "High-quality food-safe greaseproof paper with a non-stick surface, suitable for baking, wrapping and takeaway food.",
  }),
);

export const galleryItems = [
  { category: "Food", title: "Preserve every detail", image: foodImage },
  { category: "Products", title: "Foil AromaShield", image: foilImage },
  {
    category: "Lifestyle",
    title: "Made for modern kitchens",
    image: bakingImage,
  },
  {
    category: "Packaging",
    title: "A clean protective barrier",
    image: packagingImage,
  },
  {
    category: "Butter Paper",
    title: "Bake with confidence",
    image: butterPaperImage,
  },
  {
    category: "Food",
    title: "Freshness, wrapped in",
    image: wrappedFoodImage,
  },
];

export const allProducts = [...foilProducts, ...butterPaperProducts];
