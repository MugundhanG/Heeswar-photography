# Heeswar Photography — Photography Website

A bold, professional photography business website built with React JS.

## 📁 Project Structure

```
lenz-studio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cursor.jsx        # Custom gold cursor
│   │   ├── Navbar.jsx        # Fixed navigation bar
│   │   ├── Hero.jsx          # Full-screen hero section
│   │   ├── Ticker.jsx        # Scrolling services ticker
│   │   ├── About.jsx         # Studio story + stats
│   │   ├── GalleryStrip.jsx  # Auto-scrolling gallery
│   │   ├── Services.jsx      # 5 service cards with pricing
│   │   ├── Contact.jsx       # Enquiry form + contact info
│   │   └── Footer.jsx        # Footer with social links
│   ├── styles/
│   │   └── global.css        # CSS variables + base styles
│   ├── App.jsx               # Root component
│   └── index.js              # React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```

### 3. Build for production
```bash
npm run build
```

## ✏️ Customisation Checklist

Before going live, update the following:

### Branding
- [ ] Replace `LENZ Studio` with your studio name in all components
- [ ] Update logo in `Navbar.jsx` and `Footer.jsx`

### Contact Details (Contact.jsx)
- [ ] Phone number
- [ ] Email address
- [ ] Studio location

### Images
- Hero images → `Hero.jsx` (replace placeholder divs with `<img>` tags)
- About images → `About.jsx` (replace placeholder divs with your photos)
- Gallery → `GalleryStrip.jsx` (add real `<img>` tags in each gallery item)

### Pricing (Services.jsx)
- [ ] Update starting prices for each service

### Social Links (Footer.jsx)
- [ ] Update `href="#"` with your real Instagram, Behance, LinkedIn URLs

### SEO (public/index.html)
- [ ] Update meta description with your studio details
- [ ] Update meta keywords
- [ ] Add your Open Graph image

## 🌐 Deploying to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://mugundhang.github.io/Heeswar-photography",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## 🛠 Tech Stack

- React 18
- CSS Variables (no external UI library)
- Google Fonts (Bebas Neue, Cormorant Garamond, DM Sans)
- Vanilla CSS animations
