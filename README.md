# Video Editor Portfolio

A highly advanced, production-level portfolio web application for a Digital Marketing Specialist and Professional Video Editor. Built with React, featuring cinematic storytelling, high-performance animations, and a premium agency-level UI/UX.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom design system
- **Framer Motion** - UI animations
- **GSAP + ScrollTrigger** - Advanced scroll animations
- **React Player** - Video playback
- **Lucide React** - Icons

## 🎨 Design System

The application features a hybrid design combining:
- **Neumorphism** - Soft UI for buttons, cards, and inputs
- **Glassmorphism** - Translucent overlays for sections
- **Neon accents** - Blue/purple glow effects
- **Dark cinematic UI** - Premium dark theme

## 📁 Project Structure

```
video-editor-portfolio/
├── public/
│   └── videos/          # Place your video files here
├── src/
│   ├── components/      # Reusable components
│   │   ├── CustomCursor.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SmoothScroll.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Showreel.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
```

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎥 Video Files Setup

Place your video files in the `public/videos/` directory with the following exact filenames:

### Standard Video Projects
- `Raw-1.mp4` - Raw footage for Podcast Style Editing
- `Edit-1.mp4` - Edited version for Podcast Style Editing
- `Raw-2.mp4` - Raw footage for Cinematic Edit
- `Edit-2.mp4` - Edited version for Cinematic Edit
- `Raw-3.mp4` - Raw footage for Short-form Viral Edit
- `Edit-3.mp4` - Edited version for Short-form Viral Edit
- `Raw-4.mp4` - Raw footage for YouTube Content Enhancement
- `Edit-4.mp4` - Edited version for YouTube Content Enhancement

### Audio-to-Video Project (Special)
- `Audio-to-video.MPEG` - Raw audio file
- `Edit-Audio-to-edit.mp4` - Final edited video from audio

**Note:** Videos should be optimized for web (H.264 codec, reasonable file sizes) for best performance.

## ✨ Features

### Hero Section
- Fullscreen cinematic intro
- Animated headline: "I Don't Just Edit Videos — I Engineer Attention"
- Typing animation cycling through roles (Video Editor, Digital Marketer, Content Strategist)
- Smooth entrance animations with Framer Motion

### Portfolio Section
- 5 project cards showcasing before/after transformations
- Reusable ProjectCard component with:
  - Side-by-side video players for raw vs edited content
  - Special audio-to-video project with waveform animation
  - Framer Motion hover lift effects
  - GSAP scroll reveal animations

### Showreel Section
- Auto-playing highlight reel
- Neumorphic play button overlay
- GSAP intro animation

### About Section
- Glassmorphic card design
- Animated counters (150+ projects, 80+ clients, 5+ years experience)
- GSAP ScrollTrigger animations

### Services Section
- 6 service cards with neumorphic design
- Hover glow + lift effects
- Icons for: Video Editing, Digital Marketing, Color Grading, Motion Graphics, Sound Design, Content Strategy

### Skills Section
- Animated progress bars
- 8 skills with scroll-triggered animations
- Gradient-filled bars from neon-blue to neon-purple

### Testimonials Section
- 3 glass cards with client testimonials
- Smooth hover effects
- Professional layout

### CTA Section
- "Let's Turn Your Content Into a Growth Machine"
- Glowing neumorphic button
- Gradient background effects

### Contact Section
- Neumorphic input fields
- WhatsApp + email integration
- Functional contact form

### Additional Features
- **Custom glowing cursor** - Follows mouse with hover effects
- **Smooth scrolling** - Native smooth scroll implementation
- **Responsive design** - Mobile-first approach
- **Performance optimized** - Lazy loading, optimized animations
- **Custom scrollbar** - Styled to match dark theme

## 🎯 Key Highlights

- **Premium agency-level design** - Professional, modern UI
- **Clear transformation showcase** - RAW → EDITED comparisons
- **Audio-to-video capability** - Special project highlighting audio transformation
- **Impressive first impression** - Captivates within 5 seconds
- **Conversion-focused** - Designed to convert visitors into clients

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ⚡ Performance

- Lazy loading for videos
- Optimized asset loading
- 60fps animations
- Efficient GSAP and Framer Motion usage

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- Dark theme colors (dark-900, dark-800, dark-700)
- Neon accents (neon-blue, neon-purple, neon-pink)

### Content
Edit the following files to customize content:
- `src/sections/Portfolio.tsx` - Project descriptions
- `src/sections/About.tsx` - About text and counter values
- `src/sections/Services.tsx` - Service descriptions
- `src/sections/Skills.tsx` - Skill levels
- `src/sections/Testimonials.tsx` - Client testimonials
- `src/sections/Contact.tsx` - Contact information

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or support, please reach out through the contact form in the application.
