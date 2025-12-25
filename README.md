# AquaPure - Premium Mineral Water Website 💧

A modern, high-converting landing page for **AquaPure**, a premium packaged mineral water brand. Built with React, Vite, and Tailwind CSS, featuring stunning water-inspired animations and glassmorphism effects.

![AquaPure](https://img.shields.io/badge/AquaPure-Premium%20Water-2ED3C6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite)

## 🌟 Features

### **Unique Design Elements**
- 🎨 **Exclusive Color Palette**: Glacier Cyan (#2ED3C6), Deep Ocean Teal (#0E5E6F), Mineral Lime (#B4F000)
- 💧 **Fluid Water-Inspired UI**: Flowing wave animations, water ripple effects, and droplet shapes
- ✨ **Glassmorphism**: Subtle blur panels and frosted glass effects throughout
- 🌊 **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- 📱 **Fully Responsive**: Mobile-first design optimized for all devices

### **Key Sections**
1. **Hero Section** - Full-screen with animated water flow background and floating 3D bottle
2. **Why AquaPure** - 6 feature cards highlighting purity, quality, and certifications
3. **Product Showcase** - 4 product sizes (250ml, 500ml, 1L, 20L) with 3D effects
4. **Use Cases** - Homes, Offices, Events, and Retail/Distribution
5. **Lead Generation Form** - Glassmorphism contact form with business-focused fields
6. **Footer** - Comprehensive brand information and contact details

### **Conversion Optimizations**
- ✅ Sticky CTA button on mobile scroll
- ✅ Business-type and quantity requirement fields
- ✅ WhatsApp quick connect
- ✅ Multiple CTAs: "Get Bulk Order Quote" & "Become a Distributor"
- ✅ Trust badges (ISO 22000, FSSAI, BIS, HACCP)

## 🚀 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 11.15.0
- **Icons**: Lucide React 0.468.0
- **Fonts**: Sora (Display) & Inter (Body)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aquapure-website.git
   cd aquapure-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
aquapure-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx    # Navigation with glassmorphism
│   │   ├── Hero.jsx      # Hero section with animations
│   │   ├── Features.jsx  # Why AquaPure section
│   │   ├── Products.jsx  # Product showcase
│   │   ├── UseCases.jsx  # Use cases section
│   │   ├── Contact.jsx   # Lead generation form
│   │   └── Footer.jsx    # Footer with links
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles & animations
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Color Palette

```css
/* Primary Colors */
--glacier-400: #2ED3C6  /* Fresh, premium water feel */
--ocean: #0E5E6F        /* Trust and reliability */
--lime: #B4F000         /* High-conversion CTAs */
--ice: #F6FEFD          /* Purity and cleanliness */
--charcoal: #1E2A32     /* Text color */
```

## 🎭 Custom Animations

The project includes several custom CSS animations:

- **Wave Animation**: Flowing water effect in backgrounds
- **Ripple Effect**: Expanding circles for water ripples
- **Float Animation**: Gentle up-down motion for bottles
- **Shimmer Effect**: Subtle light reflection
- **Droplet Shapes**: Border-radius based water droplet forms

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS Theme

Custom theme colors are defined in `src/index.css` using the `@theme` directive:

```css
@theme {
  --color-glacier-400: #2ED3C6;
  --color-ocean: #0E5E6F;
  --color-lime: #B4F000;
  /* ... more colors */
}
```

### Fonts

The project uses Google Fonts:
- **Sora**: Display font for headings
- **Inter**: Sans-serif font for body text

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Copy dist folder to gh-pages branch
```

## 📊 Performance

- ⚡ **Fast Load Times**: Optimized with Vite's build system
- 🎯 **SEO Ready**: Semantic HTML and meta tags
- ♿ **Accessible**: WCAG compliant color contrasts
- 📦 **Small Bundle**: Code splitting and lazy loading

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from premium FMCG brands
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, email info@aquapure.in or create an issue in this repository.

---

<div align="center">
  <p>Made with 💧 by AquaPure Team</p>
  <p>
    <a href="#aquapure---premium-mineral-water-website-">Back to Top ↑</a>
  </p>
</div>
