# 🌟 Calimendi Website - Technical Documentation

> Complete React + TypeScript implementation of the magical Calimendi universe

This directory contains the main application for **Calimendi - Univers des Ome Calima**, a French artisanal doll commissioning website built with modern web technologies and accessibility-first design principles.

## 🎨 Design System Overview

### **Color Palette** (CSS Custom Properties)
```css
/* Cosmic Background Gradient */
--color-cosmic-blue: #0d1b2a      /* Deep space */
--color-deep-teal: #1b4e5a        /* Ocean depths */
--color-mystical-blue: #2e5b86    /* Twilight sky */
--color-starlight-blue: #4a7ba7   /* Dawn light */

/* Warm Accent Colors */
--color-warm-coral: #f4976c       /* Sunset glow */
--color-sunset-orange: #f8ad9d    /* Gentle warmth */
--color-ethereal-purple: #9b59b6  /* Magical essence */
--color-accent-gold: #ffd54f      /* Starlight accent */
```

### **Typography System**
- **Headers**: `Crimson Text` (Google Fonts) - Elegant serif for mystical storytelling
- **Body Text**: `Inter` (Google Fonts) - Clean sans-serif for accessibility
- **Responsive Sizing**: `clamp()` functions for fluid scaling across devices

### **Visual Effects**
- **Starry Background**: CSS-generated animated star field using radial gradients
- **Mystical Glows**: Ethereal box-shadows and border animations
- **Smooth Transitions**: Cubic-bezier easing for elegant interactions

## 📁 File Structure

```
src/
├── App.tsx              # 🏠 Complete website implementation (~700 lines)
│   ├── Landing Page     # Welcome overlay with mystical introduction
│   ├── Navigation       # Accessible tab-based navigation
│   ├── Legend Section   # Complete Calimendi mythology
│   ├── Adoption Forms   # Two comprehensive commissioning forms
│   ├── About Section    # Lauriane's artist journey
│   └── Gallery         # Image showcase with real photos
├── App.css              # 🎨 Design system & all styles (~950 lines)
├── assets/              # 📸 Content and media files
│   ├── IMG-*.jpg       # Real doll photos & artistic inspiration
│   └── *.txt           # Original French content source
└── main.tsx            # ⚛️ React application entry point
```

## 🚀 Development Commands

```bash
# Development server with hot module reloading
npm run dev            # → http://localhost:5173

# Production build (TypeScript compilation + Vite bundling)
npm run build          # → dist/ folder (16.98kB CSS, 205kB JS)

# Code quality checks
npm run lint           # ESLint validation (currently ✅ 0 errors)

# Production preview
npm run preview        # Test the built application locally
```

## ♿ Accessibility Features (WCAG 2.1 AA)

### **Semantic HTML Structure**
```typescript
// Example from App.tsx
<header role="banner">
  <nav role="navigation" aria-label="Navigation principale">
    <ul className="nav-menu">
      <li><a href="#home">Accueil</a></li>
      // ... proper semantic markup throughout
```

### **Keyboard Navigation Support**
- Tab order follows logical content flow
- Focus indicators with 3px gold outline
- Skip link to main content for screen readers
- All interactive elements accessible via keyboard

### **Screen Reader Optimization**
- Proper ARIA labels and descriptions
- `aria-labelledby` associations between headings and content
- `visually-hidden` class for screen-reader-only content
- Semantic fieldsets and legends for form groups

### **Color Contrast Compliance**
All text-background combinations meet WCAG standards:
- Normal text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio
- Interactive elements clearly distinguishable

## 📱 Responsive Design Strategy

### **Mobile-First Approach**
```css
/* Base styles for mobile */
.nav-menu { flex-direction: column; }

/* Progressive enhancement for larger screens */
@media (min-width: 768px) {
  .nav-menu { flex-direction: row; }
}
```

### **Touch-Friendly Interface**
- Minimum 44px touch targets on mobile devices
- Generous spacing between interactive elements
- Smooth hover states that degrade gracefully on touch

### **Fluid Typography & Spacing**
```css
/* Responsive sizing with clamp() */
font-size: clamp(2rem, 5vw, 3.5rem);
padding: var(--spacing-lg); /* CSS custom properties */
```

## 🇫🇷 French Localization Details

### **Language Implementation**
- `<html lang="fr">` for proper browser/screen reader handling
- French-specific form validation messages
- Cultural adaptation (e.g., "adoption" metaphor for commissioning)
- Proper French typography and punctuation spacing

### **SEO Optimization**
```html
<!-- French-specific meta tags -->
<meta property="og:locale" content="fr_FR" />
<meta name="keywords" content="Calimendi, poupée artisanale, fait main, artisanat français..." />
```

### **Content Structure**
All text content originates from `assets/Calimendi website content.txt` and is carefully structured in React components to maintain both SEO value and component modularity.

## 📋 Form Implementation

### **Two Adoption Types**
1. **Self-Adoption** (`#self-form`): Personal commissioning
2. **Gift Adoption** (`#gift-form`): Commission as gift for someone else

### **Form Features**
- **Accessible Validation**: Proper error messaging and required field indication
- **Custom Fieldsets**: Grouped related form controls with legends
- **Tab Interface**: JavaScript-powered form switching with ARIA support
- **Backend-Ready**: Structured data ready for email/database integration

### **Example Form Structure**
```typescript
<fieldset>
  <legend>Je t'attends pour célébrer :</legend>
  <div className="checkbox-group">
    <label><input type="checkbox" name="occasion" value="naissance" /> une naissance</label>
    // ... additional options with proper accessibility
  </div>
</fieldset>
```

## 🖼️ Image Management

### **Asset Strategy**
- **Lazy Loading**: `loading="lazy"` attributes for performance
- **Descriptive Alt Text**: Detailed accessibility descriptions in French
- **Optimized Formats**: High-quality JPGs balanced for web performance
- **Responsive Sizing**: CSS object-fit and flexible grid layouts

### **Gallery Implementation**
```typescript
<div className="gallery-item featured">  {/* Featured item spans 2 columns */}
  <img
    src="/src/assets/IMG-*.jpg"
    alt="Premier Calimendi créé par Lauriane - détails..."
    loading="lazy"
  />
  <div className="image-caption">
    <h4>Le Premier Calimendi</h4>
    <p>Description artistique...</p>
  </div>
</div>
```

## 🔧 Technical Architecture

### **React Implementation**
- **Single Page Application**: All content in one optimized React component
- **TypeScript Integration**: Type safety for form handling and props
- **No External Dependencies**: Pure React + CSS implementation
- **Modern React Patterns**: Functional components with hooks

### **CSS Architecture**
- **CSS Custom Properties**: Centralized design system variables
- **Mobile-First Media Queries**: Progressive enhancement approach
- **Component-Scoped Styles**: Clear organization and maintainability
- **Performance Optimized**: Minimal CSS bundle with efficient selectors

### **Build Optimization**
- **Vite Configuration**: Fast development and optimized production builds
- **TypeScript Compilation**: Type checking integrated into build process
- **Asset Optimization**: Automatic image and font optimization
- **Code Splitting**: Efficient bundle organization for faster loading

## 🎯 Performance Metrics

**Current Build Output:**
- **HTML**: 3.54kB (includes comprehensive SEO meta tags)
- **CSS**: 16.98kB (complete design system)
- **JS**: 205.01kB (React + application logic)
- **Images**: ~500kB total (4 high-quality photos)

**Optimization Features:**
- Lazy image loading for gallery
- Efficient CSS animations (transform/opacity only)
- Minimal JavaScript for form interactions
- Optimized font loading strategy

---

*This application represents a production-ready implementation of modern web development practices, accessibility standards, and thoughtful user experience design—all while maintaining the magical storytelling essence of the Calimendi universe.* ✨
