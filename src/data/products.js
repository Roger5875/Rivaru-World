const foilImage = 'https://images.unsplash.com/photo-1606914501449-5a96bce24ca7?auto=format&fit=crop&w=900&q=85'
const foodImage = 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85'
const bakingImage = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85'

export const foilProducts = ['6m', '9m', '18m', '30m', '40m', '50m', '72m'].map((length) => ({
  name: `Foil AromaShield ${length}`,
  category: 'Aluminium Foil',
  length,
  widths: ['30cm', '45cm', '60cm'],
  thickness: ['11μm', '18μm'],
  applications: ['Home cooking', 'Baking', 'Food wrapping', 'Catering'],
  image: foilImage,
  description: 'Food-grade aluminium foil designed to preserve moisture, flavour and aroma while protecting food during cooking, storage and transport.',
}))

export const butterPaperProducts = ['20m', '25m', '50m', '75m'].map((length) => ({
  name: `Butter Paper ${length}`,
  category: 'Butter Paper',
  length,
  widths: ['30cm'],
  thickness: ['Food-safe greaseproof paper'],
  applications: ['Baking', 'Cookies', 'Cakes', 'Sandwich wrapping'],
  image: bakingImage,
  description: 'High-quality food-safe greaseproof paper with a non-stick surface, suitable for baking, wrapping and takeaway food.',
}))

export const galleryItems = [
  { category: 'Food', title: 'Preserve every detail', image: foodImage },
  { category: 'Products', title: 'Foil AromaShield', image: foilImage },
  { category: 'Lifestyle', title: 'Made for modern kitchens', image: bakingImage },
  { category: 'Packaging', title: 'A clean protective barrier', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Butter Paper', title: 'Bake with confidence', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Food', title: 'Freshness, wrapped in', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85' },
]

export const allProducts = [...foilProducts, ...butterPaperProducts]
