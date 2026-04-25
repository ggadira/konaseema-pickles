const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Product data (bestsellers first)
const products = [
  // Bestsellers
  {
    id: 1,
    name: 'Avakaya (Mango Pickle)',
    category: 'veg',
    price: 275,
    weight: '500g',
    description: 'Traditional Andhra-style raw mango pickle with mustard and chili powder. Bold, tangy, and spicy.',
    image: '/images/mango-pickle.jpg',
    bestseller: true
  },
  {
    id: 7,
    name: 'Chicken Pickle',
    category: 'nonveg',
    price: 500,
    weight: '500g',
    description: 'Boneless chicken pickle cooked in traditional Konaseema style with aromatic spices and groundnut oil.',
    image: '/images/chicken-pickle.jpg',
    bestseller: true
  },
  // Veg Pickles
  {
    id: 2,
    name: 'Gongura Pickle',
    category: 'veg',
    price: 275,
    weight: '500g',
    description: 'Authentic Konaseema gongura (sorrel leaves) pickle with a signature sour and spicy taste.',
    image: '/images/gongura-pickle.jpg',
    bestseller: false
  },
  {
    id: 3,
    name: 'Tomato Pickle',
    category: 'veg',
    price: 275,
    weight: '500g',
    description: 'Ripe tomato pickle slow-cooked with aromatic spices. Sweet, tangy, and mildly spiced.',
    image: '/images/tomato-pickle.jpg',
    bestseller: false
  },
  {
    id: 4,
    name: 'Lemon Pickle',
    category: 'veg',
    price: 275,
    weight: '500g',
    description: 'Sun-dried lemon pickle made with fresh lemons, turmeric, and a blend of traditional spices.',
    image: '/images/lemon-pickle.jpg',
    bestseller: false
  },
  {
    id: 6,
    name: 'Red Chili Pickle',
    category: 'veg',
    price: 300,
    weight: '500g',
    description: 'Fiery red chili pickle stuffed with tangy spice mix. For those who love it extra hot!',
    image: '/images/chili-pickle.jpg',
    bestseller: false
  },
  {
    id: 14,
    name: 'Maagai Pachadi',
    category: 'veg',
    price: 275,
    weight: '500g',
    description: 'A traditional Andhra-style sun-dried mango pickle made by curing raw mango slices with salt and turmeric, sun-drying them for 2-3 days, and mixing with red chili powder, mustard powder, fenugreek powder, and groundnut oil.',
    image: '/images/maagai-pachadi.jpg',
    bestseller: false
  },
  {
    id: 15,
    name: 'Allam Pachadi',
    category: 'veg',
    price: 300,
    weight: '500g',
    description: 'Allam Pachadi is a popular Andhra style ginger pickle made with fresh ginger root, ground spices, tamarind & jaggery.',
    image: '/images/allam-pachadi.jpg',
    bestseller: false
  },
  {
    id: 16,
    name: 'Amla Pickle',
    category: 'veg',
    price: 300,
    weight: '500g',
    description: 'A quick and easy Amla pickle also called Usiri Avakaya, usually made during the winters when Amla are in season. Tangy, spicy, and packed with Vitamin C.',
    image: '/images/amla-pickle.jpg',
    bestseller: false
  },
  // Non-Veg Pickles
  {
    id: 8,
    name: 'Prawns Pickle',
    category: 'nonveg',
    price: 700,
    weight: '500g',
    description: 'Fresh river prawns pickle from Konaseema. Perfectly spiced with a rich, bold flavor.',
    image: '/images/prawns-pickle.jpg',
    bestseller: false
  },
  {
    id: 9,
    name: 'Fish Pickle',
    category: 'nonveg',
    price: 600,
    weight: '500g',
    description: 'Crispy fish pickle made with fresh catch from Godavari. Crunchy, spicy, and irresistible.',
    image: '/images/fish-pickle.jpg',
    bestseller: false
  },
  {
    id: 10,
    name: 'Mutton Pickle',
    category: 'nonveg',
    price: 1000,
    weight: '500g',
    description: 'Tender mutton pieces slow-cooked in a rich blend of spices and cold-pressed groundnut oil.',
    image: '/images/mutton-pickle.jpg',
    bestseller: false
  },
  // Snacks
  {
    id: 11,
    name: 'Sunnunda',
    category: 'snacks',
    price: 150,
    weight: '250g',
    description: 'Crispy and savory Sunnunda made with uraddal flour and jaggery. A traditional perfect Andhra snack.',
    image: '/images/sunnunda.jpg',
    bestseller: false
  },
  {
    id: 12,
    name: 'Boondi Mixer',
    category: 'snacks',
    price: 150,
    weight: '250g',
    description: 'Crunchy boondi mixed with roasted peanuts, curry leaves, and a blend of tangy spices.',
    image: '/images/boondi-mixer.jpg',
    bestseller: false
  },
  {
    id: 13,
    name: 'Karapusa',
    category: 'snacks',
    price: 150,
    weight: '250g',
    description: 'Traditional crispy Karapusa (ribbon pakoda) made with besan flour. Crunchy and addictive!',
    image: '/images/karapusa.jpg',
    bestseller: false
  }
];

// API: Get all products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'all') {
    return res.json(products.filter(p => p.category === category));
  }
  res.json(products);
});

// API: Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id, 10));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// API: Contact form
app.post('/api/contact', (req, res) => {
  const { name, mobile, message } = req.body;
  if (!name || !mobile || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  console.log('Contact form submission:', { name, mobile, message });
  res.json({ success: true, message: 'Thank you for reaching out! We will get back to you soon.' });
});

// Fallback to index.html for SPA-like routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🥒 Rajulainti Ruchulu is running!`);
  console.log(`   Local: http://localhost:${PORT}`);
  console.log(`   Press Ctrl+C to stop\n`);
});
