# Portfolio - Engineering Documentation

**Live Site:** [jeetsharma.com](https://jeetsharma.com)  
**Lighthouse Score:** 98/100 (Desktop) - Measured Jan 2026  
**First Load JS:** 144 KB (optimized)

## Tech Stack & Architecture Decisions

### Framework: Next.js 14 (App Router)

**Why Next.js over alternatives:**
- **Static Generation:** Pre-renders pages at build time → instant TTFB
- **Automatic Code Splitting:** Each route loads only necessary JavaScript
- **Edge-Ready:** Optimized for Vercel Edge Network deployment
- **Built-in Optimizations:** Image, font, and script optimization out of the box

**Why App Router over Pages Router:**
- Server Components reduce client-side JavaScript
- Improved data fetching patterns
- Better streaming and loading states

### Styling: Tailwind CSS

**Why Tailwind:**
- **Minimal Bundle:** PurgeCSS removes unused styles (production CSS < 10kb)
- **Design Consistency:** Utility classes enforce spacing/color system
- **No Runtime:** Zero JavaScript cost unlike CSS-in-JS solutions
- **Trade-off:** Verbose className strings (acceptable for single-person project)

### Animation: Framer Motion

**Why Framer Motion:**
- **Performance:** GPU-accelerated animations via CSS transforms
- **Bundle Size:** 40kb gzipped (vs react-spring: 80kb)
- **DX:** Declarative API with TypeScript support
- **Tree-shakable:** Only imported components included in bundle

**Trade-off consideration:**
- Adds ~40kb to bundle size
- Justified by: Professional motion design improves perceived performance and user engagement

### State Management: React Hooks

**Why no Redux/Zustand:**
- **Simplicity:** Portfolio has minimal global state
- **Performance:** No unnecessary re-renders from global store
- **Bundle Size:** Zero additional dependencies

**State architecture:**
- Component-local state: `useState` for UI interactions
- Server state: GitHub API fetched client-side with error boundaries
- No state persistence needed (no user sessions)

### Data Fetching: Native Fetch + GitHub REST API

**Why client-side API calls:**
- **Real-time Data:** GitHub contribution graph updates automatically
- **No Backend:** Reduces deployment complexity
- **Caching Strategy:** API responses cached client-side, fallback to static values

**API Integration:**
```typescript
// GitHubStats.tsx
- Fetches user data: repos count, account age
- Calculates total stars across all repositories
- Implements loading states and error boundaries
- Fallback to static values on API failure (resilient)
```

---

## Performance Optimizations

### Lighthouse Audit Results (Jan 2026)

**Desktop Score: 98/100**
- First Contentful Paint: 0.9s
- Largest Contentful Paint: 1.4s
- Total Blocking Time: 90ms
- Cumulative Layout Shift: 0.00 (perfect stability)
- Speed Index: 1.6s

### Optimization Strategies Implemented

1. **Font Optimization**
   - Next.js `next/font` for automatic font optimization
   - Geist font self-hosted (no external request to Google Fonts)
   - Font display: swap (prevents invisible text during load)

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for heavy components (GitHub calendar)
   - Lazy loading for below-fold content

3. **Zero Layout Shift**
   - Fixed dimensions for dynamic content
   - Skeleton loaders for async data
   - No font/image size changes after load

4. **Bundle Size Management**
   ```
   Main Route: 56.9 KB
   First Load JS: 144 KB
   Shared Chunks: 87.2 KB
   ```
   - Under 200kb target (achieved)
   - Tree-shaking enabled for all dependencies
   - No unused dependencies in package.json

## Development Setup

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
git clone https://github.com/JeetDSharma/portfolio.git
cd portfolio
npm install
```

### Local Development
```bash
npm run dev
# Opens http://localhost:3000
```


---

## License

This portfolio is open source for educational purposes. Feel free to reference architecture decisions and implementation patterns.

**Contact:** jeetsharma2112@gmail.com  
**GitHub:** [@JeetDSharma](https://github.com/JeetDSharma)  
**Portfolio:** [jeetsharma.com](https://jeetsharma.com)
