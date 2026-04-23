// ==================== DOM Elements ====================
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

// ==================== Load Products ====================
async function loadProducts(category = 'all') {
  try {
    const url = category === 'all' ? '/api/products' : `/api/products?category=${encodeURIComponent(category)}`;
    const res = await fetch(url);
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    productsGrid.innerHTML = '<p style="text-align:center;color:#999;">Failed to load products. Please try again.</p>';
  }
}

function renderProducts(products) {
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card animate-in">
      ${product.bestseller ? '<span class="product-badge">⭐ Bestseller</span>' : ''}
      <span class="category-badge ${product.category}">${product.category === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</span>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <div class="product-price">₹${product.price} <span class="product-weight">/ ${product.weight}</span></div>
          <button class="btn-order" onclick="orderProduct('${product.name}')">Order Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==================== Filter ====================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadProducts(btn.dataset.category);
  });
});

function filterByCategory(category) {
  filterBtns.forEach(b => {
    b.classList.remove('active');
    if (b.dataset.category === category) b.classList.add('active');
  });
  loadProducts(category);
}

// ==================== Order via WhatsApp ====================
function orderProduct(productName) {
  const whatsappNumber = '919399386666';
  const text = `🥒 Hi! I'd like to order *${productName}* from Konaseema Healthy Pickles. Please share the details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}

// ==================== Contact Form ====================
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !mobile || !message) {
    formStatus.textContent = 'All fields are required.';
    formStatus.className = 'form-status error';
    return;
  }

  const whatsappNumber = '919399386666';
  const text = `🥒 *New Enquiry - Konaseema Healthy Pickles*\n\n👤 *Name:* ${name}\n📞 *Mobile:* ${mobile}\n💬 *Message:* ${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, '_blank');

  formStatus.textContent = 'Redirecting to WhatsApp...';
  formStatus.className = 'form-status success';
  contactForm.reset();
});

// ==================== Mobile Nav ====================
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ==================== Active section on scroll ====================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ==================== Init ====================
loadProducts();
