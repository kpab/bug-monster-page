# Bug Monsters Landing Page

This is the official landing page for Bug Monsters - a VS Code extension that gamifies debugging by visualizing errors as animated monsters.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multilingual Support**: Supports English and Japanese with easy language switching
- **SEO Optimized**: Comprehensive meta tags and structured data for better search engine visibility
- **Modern Design**: Clean, modern design with smooth animations and transitions
- **Accessible**: Built with accessibility in mind following WCAG guidelines

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Press Start 2P & Poppins)
- SVG Graphics

## Local Development

Simply open `index.html` in your browser to view the landing page locally.

```bash
# No build process required - just open the HTML file
open index.html
```

## Deployment

This site is designed to be hosted on GitHub Pages.

### GitHub Pages Setup

1. Push all files to your repository
2. Go to repository Settings > Pages
3. Select branch (usually `main` or `gh-pages`)
4. Select root directory (`/` or `/docs`)
5. Save and wait for deployment

The site will be available at: `https://kpab.github.io/bug-monster-page/`

## File Structure

```
bug-monster-page/
├── index.html          # Main HTML file
├── styles.css          # All styles including responsive design
├── script.js           # JavaScript for i18n and interactions
├── favicon.svg         # SVG favicon
├── favicon.png         # PNG favicon fallback
├── images/
│   └── og-image.png    # Open Graph image for social sharing
└── README.md           # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-error: #ff4444;
    --color-type: #9945ff;
    --color-reference: #3b82f6;
    --color-warning: #fbbf24;
    --color-hint: #10b981;
    /* ... */
}
```

### Adding Translations

Add new language translations in `script.js`:

```javascript
const translations = {
    en: { /* ... */ },
    ja: { /* ... */ },
    // Add your language here
    es: { /* ... */ }
};
```

## License

MIT License - See Bug Monsters main repository for details.

## Links

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=kpab.bug-monsters)
- [GitHub Repository](https://github.com/kpab/bug-monster)
- [Report Issues](https://github.com/kpab/bug-monster/issues)

---

© 2025 kpab
