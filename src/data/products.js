import foil6mImage from "../assets/images/products/6 meter.png";
import foil9mImage from "../assets/images/products/9 meter.png";
import foil18mImage from "../assets/images/products/18 meter.png";
import foil30mImage from "../assets/images/products/30 meter.png";
import foil40mImage from "../assets/images/products/40 meter.png";
import foil50mImage from "../assets/images/products/50 meter.png";
import foil72mImage from "../assets/images/products/72 Meter New.png";
import butter20mImage from "../assets/images/products/20 meter_Butter Paper.png";
import butter25mImage from "../assets/images/products/25 meter_Butter Paper.png";
import butter50mImage from "../assets/images/products/50 meter_Butter Paper.png";
import butter75mImage from "../assets/images/products/75 meter_Butter Paper.png";

const foilImages = {
  "6m": foil6mImage,
  "9m": foil9mImage,
  "18m": foil18mImage,
  "30m": foil30mImage,
  "40m": foil40mImage,
  "50m": foil50mImage,
  "72m": foil72mImage,
};

const butterPaperImages = {
  "20m": butter20mImage,
  "25m": butter25mImage,
  "50m": butter50mImage,
  "75m": butter75mImage,
};

export const foilProducts = ["6m", "9m", "18m", "30m", "40m", "50m", "72m"].map(
  (length) => ({
    name: `Foil AromaShield ${length}`,
    category: "Aluminium Foil",
    length,
    widths: ["30cm", "45cm", "60cm"],
    thickness: ["11μm", "18μm"],
    applications: ["Home cooking", "Baking", "Food wrapping", "Catering"],
    image: foilImages[length],
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
    image: butterPaperImages[length],
    description:
      "High-quality food-safe greaseproof paper with a non-stick surface, suitable for baking, wrapping and takeaway food.",
  }),
);

export const allProducts = [...foilProducts, ...butterPaperProducts];
