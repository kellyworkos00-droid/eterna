# Eterna Interiors Hub (E.I.H)

A luxury interior design website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Brand Identity

- **Brand Name**: Eterna Interiors Hub (E.I.H)
- **Core Colors**: 
  - Maroon (#800000) - Primary
  - Black (#0a0a0a) - Secondary/Neutral
  - Off-White/Gold (#f5f5f5, #d4af37) - Accents
- **Vibe**: Luxury, timelessness, and high-end craftsmanship
- **Target Audience**: Homeowners, commercial property managers, and luxury developers

## 🛠️ Technical Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif, headings) & Montserrat (sans-serif, body)

## 📁 Project Structure

```
etana/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── WhyChooseEterna.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── CTASection.tsx
│   ├── portfolio/
│   │   └── BeforeAfterSlider.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── public/
│   └── (assets will go here)
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Features

### Home Page
- High-impact hero section with smooth animations
- "Why Choose Eterna" section highlighting core values
- Featured projects showcase
- Call-to-action section with statistics

### Portfolio Page
- Filterable gallery (Living Room, Kitchen, Office, etc.)
- Interactive "Before vs. After" slider for project comparisons
- Category-based filtering system
- Smooth animations and transitions

### Services Page
- Detailed breakdown of all services:
  - Space Planning
  - 3D Rendering & Visualization
  - Material Selection
  - Full Project Management
  - Custom Furniture Design
  - Lighting Design
- 4-step process visualization
- Service features with icons

### About Page
- Company story and background
- Mission and design philosophy
- Core values presentation
- Team member profiles

### Contact Page
- Smart inquiry form with:
  - Budget range selector
  - Square footage input
  - Project type selection
- Contact information display
- Google Maps integration placeholder
- Form validation and submission handling

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach ensuring beautiful layouts on all devices
- **Luxury Aesthetics**: Sophisticated color palette with maroon and black
- **Smooth Animations**: Framer Motion animations throughout for enhanced UX
- **Interactive Elements**: Before/After slider, hover effects, and smooth transitions
- **Custom Scrollbar**: Themed scrollbar matching brand colors
- **Texture Overlay**: Subtle patterns for added depth

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 CSS Variables

```css
:root {
  --eterna-maroon: #800000;
  --eterna-black: #0a0a0a;
  --eterna-accent: #f5f5f5;
  --eterna-gold: #d4af37;
  --transition-smooth: all 0.3s ease-in-out;
}
```

## 🌟 Key Components

### Navigation
- Sticky header with scroll detection
- Mobile-responsive hamburger menu
- Smooth hover effects and transitions

### Footer
- Comprehensive site links
- Social media integration
- Contact information
- Legal links

### Before/After Slider
- Drag-to-compare functionality
- Touch-enabled for mobile devices
- Visual labels for before/after states

## 🎯 Future Enhancements

- [ ] CMS integration (Contentful or Sanity.io)
- [ ] Blog section
- [ ] Client testimonials
- [ ] Real project images
- [ ] Google Maps API integration
- [ ] Form API endpoint integration
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility improvements

## 📄 License

© 2026 Eterna Interiors Hub. All rights reserved.

## 🤝 Support

For support, email info@eternainteriors.com or call +1 (555) 123-4567

## 👥 Development Team

Built with precision and care for luxury interior design excellence.
