# Memory Bank — Konaseema Healthy Pickles Web Application

> This file documents the full project context so any AI assistant can continue working on this project seamlessly.

---

## 1. Project Overview

| Field | Details |
|-------|---------|
| **Project Name** | Konaseema Healthy Pickles |
| **Live URL** | https://konaseema-pickles.onrender.com/ |
| **GitHub Repo** | https://github.com/ggadira/konaseema-pickles.git |
| **Branch** | master |
| **Domain Goal** | konaseemahealthypickles.in or konaseema-pickles.com (not purchased yet) |
| **Purpose** | E-commerce website for selling Veg & Non-Veg pickles from Konaseema, Andhra Pradesh |
| **Owner WhatsApp** | +91 9399386666 |

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js v25.9.0 (installed via Homebrew on macOS ARM) |
| **Backend** | Express.js v4.18.2 |
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (single-page app) |
| **Hosting** | Render.com (free tier, auto-deploys on git push to master) |
| **Images** | Real photos from Pexels (free license) |
| **Contact** | WhatsApp Click-to-Chat API (no backend email/SMS needed) |

---

## 3. Project Structure

```
web-application-pickles/
├── package.json               # Dependencies & scripts
├── package-lock.json
├── server.js                  # Express server, product data API, contact API
├── MEMORY_BANK.md             # This file
├── node_modules/              # (gitignored)
├── public/
│   ├── index.html             # Single-page HTML (all sections)
│   ├── css/
│   │   └── style.css          # All styles (responsive, hero overlay, product cards)
│   ├── js/
│   │   └── app.js             # Product loading, filtering, WhatsApp integration
│   └── images/
│       ├── hero-bg.jpg        # Hero background (owner's personal photo)
│       ├── mango-pickle.jpg   # Product images (all from Pexels, free license)
│       ├── gongura-pickle.jpg
│       ├── tomato-pickle.jpg
│       ├── lemon-pickle.jpg
│       ├── amla-pickle.jpg
│       ├── chili-pickle.jpg
│       ├── chicken-pickle.jpg
│       ├── prawns-pickle.jpg
│       ├── fish-pickle.jpg
│       ├── mutton-pickle.jpg
│       ├── sunnunda.jpg
│       ├── boondi-mixer.jpg
│       └── karapusa.jpg
```

---

## 4. Key Files & What They Do

### `server.js`
- Express server listening on `process.env.PORT || 3000`
- Serves static files from `public/`
- **`GET /api/products`** — Returns all 13 products (supports `?category=veg`, `?category=nonveg`, or `?category=snacks` filter)
- **`GET /api/products/:id`** — Returns single product by ID
- **`POST /api/contact`** — Accepts `{ name, mobile, message }`, logs to console
- Product data is hardcoded in this file (no database)

### `public/index.html`
- Single-page layout with sections: Header/Nav, Hero, Products, Why Choose Us, About, Testimonials, Contact, Footer
- Contact form fields: **Name**, **Mobile Number** (10-digit tel input), **Message**
- Nav links scroll to sections smoothly

### `public/css/style.css`
- CSS variables for colors/fonts at `:root`
- Hero section uses `background: url('/images/hero-bg.jpg')` with dark overlay via `::before` pseudo-element (`rgba(0, 0, 0, 0.45)`)
- Hero text is white with text-shadow for readability
- Product images use `object-fit: cover` at full width/height
- Fully responsive (mobile hamburger menu)

### `public/js/app.js`
- Fetches products from `/api/products` and renders cards dynamically
- Filter tabs: All / Veg / Non-Veg / Snacks
- **Order Now button** → Opens WhatsApp with product name pre-filled
- **Contact form submit** → Opens WhatsApp with formatted message (Name, Mobile, Message)
- WhatsApp number hardcoded: `919399386666`
- Mobile nav toggle, scroll-based active nav highlighting

---

## 5. Products Data

### Veg Pickles
| ID | Name | Price | Bestseller |
|----|------|-------|-----------|
| 1 | Avakaya (Mango Pickle) | ₹250/500g | ⭐ Yes |
| 2 | Gongura Pickle | ₹220/500g | ⭐ Yes |
| 3 | Tomato Pickle | ₹200/500g | No |
| 4 | Lemon Pickle | ₹180/500g | No |
| 5 | Amla (Gooseberry) Pickle | ₹230/500g | No |
| 6 | Red Chili Pickle | ₹210/500g | No |

### Non-Veg Pickles
| ID | Name | Price | Bestseller |
|----|------|-------|-----------|
| 7 | Chicken Pickle | ₹350/500g | ⭐ Yes |
| 8 | Prawns Pickle | ₹400/500g | ⭐ Yes |
| 9 | Fish Pickle | ₹380/500g | No |
| 10 | Mutton Pickle | ₹450/500g | No |

### Snacks (3)
| ID | Name | Price | Bestseller |
|----|------|-------|------------|
| 11 | Sunnunda | ₹200/250g | No |
| 12 | Boondi Mixer | ₹180/250g | No |
| 13 | Karapusa | ₹190/250g | No |

---

## 6. Build History (Chronological)

| # | Date | Change |
|---|------|--------|
| 1 | Apr 23, 2026 | Created full project (Node.js + Express + HTML/CSS/JS + 11 SVG images) |
| 2 | Apr 23, 2026 | Installed Node.js via Homebrew (macOS ARM) |
| 3 | Apr 23, 2026 | Ran locally on localhost:3000, tested all features |
| 4 | Apr 23, 2026 | Deployed to Render.com (connected GitHub repo, auto-deploy) |
| 5 | Apr 23, 2026 | Changed hero background to owner's personal photo (hero-bg.jpg from Downloads) |
| 6 | Apr 23, 2026 | Replaced all 11 SVG placeholders with real Pexels photos (.jpg) |
| 7 | Apr 23, 2026 | Updated CSS for real photos (object-fit: cover, full width) |
| 8 | Apr 23, 2026 | Changed contact form: Email field → Mobile Number field (all 3 files) |
| 9 | Apr 23, 2026 | Integrated WhatsApp Click-to-Chat for contact form and Order Now buttons |
| 10 | Apr 25, 2026 | Removed Egg Pickle, added 3 Snacks (Sunnunda, Boondi Mixer, Karapusa) with Snacks filter tab |

---

## 7. Contact Details in Website (index.html)

| Field | Current Value | Status |
|-------|--------------|--------|
| Address | Konaseema, East Godavari District, Andhra Pradesh, India | ✅ Set |
| Phone | +91 XXXXX XXXXX | ⚠️ Placeholder — needs real number |
| Email | info@konaseemahealthypickles.in | ✅ Set |
| Working Hours | Mon - Sat: 9:00 AM - 6:00 PM | ✅ Set |
| WhatsApp (in JS) | +91 9399386666 | ✅ Set |

---

## 8. Deployment

### Current: Render.com (Free Tier)
- Auto-deploys when `master` branch is pushed to GitHub
- Free tier: 750 hrs/month, 512MB RAM, spins down after 15min inactivity (30-50s cold start)
- Custom domains supported on free tier

### Deploy Command
```bash
export PATH="/opt/homebrew/bin:$PATH"
git add -A && git commit -m "your message" && git push origin master
```

### Run Locally
```bash
export PATH="/opt/homebrew/bin:$PATH"
cd web-application-pickles
npm start
# Opens at http://localhost:3000
```

---

## 9. Future Plans (Not Yet Done)

- [ ] **Migrate to Vercel** — No cold start, free, supports Node.js (decided to do later)
- [ ] **Buy custom domain** — konaseema-pickles.com or konaseemahealthypickles.in (~₹500-800/year)
- [ ] **Update phone placeholder** — Replace "+91 XXXXX XXXXX" in index.html contact section
- [ ] **Add more product images** — Replace with owner's actual pickle photos when available

---

## 10. Development Environment Notes

- **OS:** macOS ARM (Apple Silicon)
- **Homebrew:** /opt/homebrew
- **Node.js:** /opt/homebrew/bin/node (v25.9.0)
- **Important:** New terminal sessions need `export PATH="/opt/homebrew/bin:$PATH"` before running node/npm/git
- **Workspace path:** `/Users/GGADIRA/Library/CloudStorage/OneDrive-Mercedes-Benz(corpdir.onmicrosoft.com)/Desktop/PROJECT/web-application-pickles`
