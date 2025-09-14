# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Calimendi - Univers des Ome Calima**: A complete French website for Lauriane's handcrafted magical dolls business. The website showcases the mystical world of Calimendi creatures and provides an immersive, accessible experience for customers to learn about and "adopt" these unique artisanal creations.

## Project Structure

This is a React + TypeScript website built with Vite, located in the `ome-calima/` directory:

```
ome-calima-website/
├── CLAUDE.md                    # This file - Claude Code guidance
├── README.md                    # Main project documentation
├── ome-calima/                  # Main application directory
│   ├── src/
│   │   ├── App.tsx              # Complete Calimendi website implementation
│   │   ├── App.css              # Mystical design system & styles
│   │   ├── assets/              # Images and content files
│   │   │   ├── IMG-*.jpg        # Calimendi photos (real dolls)
│   │   │   └── Calimendi website content.txt # French content source
│   │   └── main.tsx             # React entry point
│   ├── index.html               # HTML with SEO meta tags & structured data
│   ├── package.json             # Dependencies & scripts
│   └── dist/                    # Production build output
```

## Development Commands

All development commands should be run from the `ome-calima/` directory:

```bash
cd ome-calima/
npm run dev        # Start development server (http://localhost:5173)
npm run build      # Build for production (TypeScript + Vite)
npm run lint       # Run ESLint (currently passes with no errors)
npm run preview    # Preview production build
```

## Technical Stack

- **Framework**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Custom CSS with design system (no external CSS frameworks)
- **Languages**: French (primary), HTML lang="fr"
- **Fonts**: Google Fonts (Crimson Text serif + Inter sans-serif)

## Website Features Implemented

### ✅ Core Sections
- **Landing Page**: Mystical welcome with starry background animation
- **Legend (Lore)**: Complete Calimendi mythology and Lauriane's first encounter story
- **Adoption Forms**: Two comprehensive forms (self-adoption & gifting) with accessibility features
- **About Section**: Lauriane's artist journey and mission statement
- **Image Gallery**: Real doll photos, logo, and AI-generated inspiration art

### ✅ Design System
- **Color Palette**: Cosmic blues (#0d1b2a → #4a7ba7), warm corals (#f4976c), ethereal purples (#9b59b6)
- **Typography**: Responsive clamp() sizing, serif headers, sans-serif body
- **Visual Effects**: CSS gradients, starry background, mystical glows, border animations
- **Components**: Reusable card layouts, form styling, navigation

### ✅ Accessibility (WCAG 2.1 AA Compliant)
- **Semantic HTML**: Proper heading hierarchy, ARIA labels, roles
- **Keyboard Navigation**: Tab order, focus indicators, skip links
- **Screen Reader Support**: Alt text, aria-labelledby, visually-hidden content
- **Color Contrast**: All text meets 4.5:1 minimum ratio
- **Touch Targets**: 44px minimum for mobile accessibility

### ✅ SEO & Performance
- **French SEO**: Complete meta tags, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD for local business, products
- **Performance**: Lazy loading images, optimized build (16.98kB CSS, 205kB JS)
- **Mobile-First**: Responsive grid layouts, fluid typography

## Content Management

- **Source**: `src/assets/Calimendi website content.txt` contains all French content
- **Images**: 4 assets in `/src/assets/` with descriptive alt text
- **Forms**: Based on original adoption certificates from content file
- **Localization**: 100% French content with proper lang attributes

## Development Workflow

1. **Content Updates**: Modify `App.tsx` components and `App.css` styles
2. **Images**: Add to `/src/assets/` with descriptive filenames and alt text
3. **Forms**: Update form components in `App.tsx` with proper validation
4. **Styling**: Use CSS custom properties (--color-*, --spacing-*, etc.) for consistency
5. **SEO**: Update `index.html` meta tags and structured data as needed

## Important Notes for Claude Code

- **No External Dependencies**: Project uses only React + TypeScript, no UI libraries
- **Accessibility First**: Always maintain WCAG compliance when making changes
- **French Language**: All content should remain in French unless specifically requested otherwise
- **Design Consistency**: Use existing CSS custom properties for colors, spacing, typography
- **Form Functionality**: Forms have proper validation but no backend (ready for integration)
- **Build Status**: ✅ Production build successful, no TypeScript/ESLint errors

## Future Enhancements (Phase 2)

- Payment integration (Stripe/PayPal for French market)
- Admin panel for new doll additions
- Email form handling backend
- Image optimization pipeline
- Performance monitoring