# Images Directory

## Required Images

### OG Image (og-image.png)
- **Size**: 1200x630 pixels
- **Format**: PNG or JPEG
- **Purpose**: Social media sharing (Open Graph)
- **Current**: SVG placeholder provided (og-image.svg)

To create a PNG version:
1. Open og-image.svg in a browser
2. Take a screenshot or use an online SVG to PNG converter
3. Save as `og-image.png` (1200x630px)
4. Update the HTML meta tags to point to the PNG version

### Favicon (favicon.png)
- **Size**: 32x32 or 64x64 pixels (or larger for Retina displays)
- **Format**: PNG
- **Purpose**: Browser favicon fallback
- **Current**: SVG favicon is provided in root directory (favicon.svg)

Modern browsers support SVG favicons, but for broader compatibility:
1. Convert favicon.svg to PNG at 32x32, 64x64, or 128x128 pixels
2. Save as `favicon.png` in the root directory
3. Optionally create favicon.ico for legacy browser support

## Optional Assets

You can add additional images here:
- Screenshots of the extension
- Demo GIFs
- Logo variations
- Monster illustrations

## Tools for Image Conversion

Online tools:
- [CloudConvert](https://cloudconvert.com/) - SVG to PNG/ICO
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Favicon generator
- [Canva](https://www.canva.com/) - Design og-image with templates

Command-line tools:
- ImageMagick: `convert favicon.svg -resize 32x32 favicon.png`
- Inkscape: `inkscape -w 1200 -h 630 og-image.svg -o og-image.png`
