# Required Icons and Images for Portfolio

To complete the SEO and PWA optimization, you need to create and add the following image assets to the `/public` directory:

## Required Files

### Favicons
- `favicon-16x16.png` - 16x16px favicon
- `favicon-32x32.png` - 32x32px favicon
- `favicon.ico` - Standard ICO file (optional but recommended)

### Apple Touch Icons
- `apple-touch-icon.png` - 180x180px for iOS devices

### Android Chrome Icons
- `android-chrome-192x192.png` - 192x192px for Android
- `android-chrome-512x512.png` - 512x512px for Android

### Safari
- `safari-pinned-tab.svg` - Monochrome SVG for Safari pinned tabs

### Open Graph Image
- `og-image.png` - 1200x630px for social media sharing
  - This is crucial for LinkedIn, Twitter, Facebook shares
  - Should include your name, title, and minimal branding

## How to Generate These Icons

### Option 1: Use an Online Generator
1. Create a base logo/profile image (at least 512x512px)
2. Use a service like:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - https://www.favicon-generator.org/

### Option 2: Design Manually   
1. Create a square design representing your brand
2. Recommended colors: Match your dark/light theme (black/white/gray tones)
3. Keep it simple and recognizable at small sizes
4. Export at required sizes using Figma, Photoshop, or Sketch

### Option 3: Use Your Initials
Simple text-based approach:
- Background: Black (#000000) or White (#FFFFFF)
- Text: "JS" in a modern sans-serif font
- High contrast for visibility

## OG Image Recommendations

For `og-image.png` (1200x630px):
- **Background**: Gradient or solid color matching your theme
- **Main Text**: "Jeet Sharma"
- **Subtitle**: "Backend Engineer • Distributed Systems"
- **Additional**: UMass Amherst logo or tech stack icons
- **Keep text readable**: Minimum 60px font size
- **Safe zone**: Keep important content 100px from edges

## Quick Implementation

If you need a placeholder immediately:
1. Create a simple colored square with your initials "JS"
2. Export at each required size
3. Replace with professional design later

## Verification

After adding the files, verify:
1. Visit your site and check the browser tab icon
2. Share a link on LinkedIn/Twitter to see the OG preview
3. Test "Add to Home Screen" on mobile devices
4. Run Lighthouse audit to confirm all icons are detected

## Current Status

✅ Metadata configured in `app/layout.tsx`
✅ Web manifest created at `public/site.webmanifest`
❌ Image assets pending creation

Once you add these files, your portfolio will have complete SEO optimization and PWA capabilities!
