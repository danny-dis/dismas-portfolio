# React/Next.js Animation Libraries Comparison (2025)
## Comprehensive Guide for Portfolio Development

---

## Executive Summary

| Library | Bundle Size (min+gzip) | Learning Curve | Best For |
|---------|----------------------|----------------|----------|
| **Framer Motion** | ~4.6-34KB (tree-shakable) | Easy | UI animations, gestures, React apps |
| **GSAP** | ~25-50KB (+ plugins) | Moderate | Complex timelines, scroll animations |
| **React Spring** | ~15-25KB | Moderate | Physics-based animations |
| **CSS Animations** | 0KB | Easy | Simple transitions, hover effects |
| **Lottie** | ~30-50KB + JSON files | Easy | Complex vector animations |
| **Rive** | ~20-30KB | Easy | Interactive state-driven animations |
| **Three.js / R3F** | ~150-600KB | Steep | 3D scenes, immersive experiences |

---

## 1. Framer Motion (Motion for React)

### Bundle Size
- **Full bundle**: ~34KB gzipped
- **With LazyMotion**: ~4.6KB initial + feature subsets
- **Tree-shaking**: Excellent - only import what you use
- **Individual hooks**: ~1KB for single features

### Performance
- **GPU utilization**: Excellent - uses `transform` and `opacity` by default
- **Runtime overhead**: Low - optimized for React's render cycle
- **Mobile performance**: Very good - 60fps on modern devices
- **Layout animations**: Hardware-accelerated layout transitions

### Ease of Use
- **Learning curve**: Easy to moderate
- **React integration**: Native - built specifically for React
- **TypeScript**: First-class support
- **Documentation**: Excellent with interactive examples

### Key Features
- ✅ **Mouse tracking**: `useMotionValue` + mouse events
- ✅ **3D transforms**: Full CSS 3D transform support
- ✅ **Gesture support**: `whileHover`, `whileTap`, `whileDrag`
- ✅ **Scroll-triggered**: `useScroll`, `useTransform`, `whileInView`
- ✅ **Page transitions**: `<AnimatePresence />` with exit animations
- ✅ **Spring physics**: `useSpring`, configurable stiffness/damping
- ✅ **Layout animations**: Automatic layout transitions
- ✅ **Variants**: Declarative animation states

### Portfolio-Specific Strengths
1. **Text decode/scramble**: Native scramble text effect (Motion+)
2. **3D card tilts**: `rotateX`, `rotateY` with mouse tracking
3. **Magnetic buttons**: `whileHover` with spring physics
4. **Parallax scrolling**: `useScroll` + `useTransform`
5. **Smooth page transitions**: `<AnimatePresence mode="wait">`

### Code Example
```tsx
// 3D Card Tilt with Mouse Tracking
import { motion, useMotionValue, useTransform } from "motion/react";

function TiltCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      Card Content
    </motion.div>
  );
}
```

---

## 2. GSAP (GreenSock) with @gsap/react

### Bundle Size
- **Core**: ~25KB gzipped
- **With ScrollTrigger**: ~35KB
- **Full + plugins**: ~50KB+
- **Tree-shaking**: Good, but plugins add overhead

### Performance
- **GPU utilization**: Excellent - auto-applies transforms
- **Runtime overhead**: Very low - optimized animation engine
- **Mobile performance**: Excellent - industry standard
- **Memory**: Efficient - object pooling

### Ease of Use
- **Learning curve**: Moderate to steep
- **React integration**: Good via `@gsap/react` hooks
- **TypeScript**: Good support
- **Documentation**: Excellent - extensive API reference

### Key Features
- ✅ **Mouse tracking**: Custom implementations with quickTo
- ✅ **3D transforms**: Full 3D matrix support
- ✅ **Gesture support**: Via Draggable plugin
- ✅ **Scroll-triggered**: ScrollTrigger plugin (industry best)
- ✅ **Page transitions**: Timeline-based control
- ✅ **Spring physics**: Custom easings + Physics2D plugin
- ✅ **Morphing**: MorphSVG plugin
- ✅ **DrawSVG**: Path drawing animations

### Portfolio-Specific Strengths
1. **Complex scroll sequences**: Pinning, scrubbing, timeline control
2. **Text effects**: SplitText plugin for character/word animations
3. **3D card tilts**: Excellent with mouse tracking
4. **Magnetic buttons**: Custom implementation with quickTo
5. **Particle systems**: Via canvas + GSAP integration
6. **Morphing shapes**: MorphSVG for complex vector animations

### Code Example
```tsx
// ScrollTrigger with Pin
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to(".pin-element", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500",
        pin: true,
        scrub: 1,
      },
      scale: 1.5,
      opacity: 0,
    });
  }, { scope: containerRef });
  
  return <div ref={containerRef}>...</div>;
}
```

---

## 3. React Spring

### Bundle Size
- **@react-spring/web**: ~15-25KB gzipped
- **Modular imports**: Import only needed springs
- **Tree-shaking**: Good

### Performance
- **GPU utilization**: Good - hardware acceleration
- **Runtime overhead**: Low
- **Mobile performance**: Good
- **60fps**: Consistent

### Ease of Use
- **Learning curve**: Moderate - physics-based approach
- **React integration**: Excellent - hooks-based
- **TypeScript**: Good support
- **Documentation**: Good but less comprehensive

### Key Features
- ✅ **Mouse tracking**: Via `useSpring` with mouse events
- ✅ **3D transforms**: Full support
- ✅ **Gesture support**: Via @react-spring/gesture
- ✅ **Scroll-triggered**: Manual implementation
- ✅ **Page transitions**: Parallax support
- ✅ **Spring physics**: ⭐ Core strength - best spring physics
- ✅ **Interpolations**: Excellent value interpolation

### Portfolio-Specific Strengths
1. **Spring-based animations**: Most natural feel
2. **Gestures**: Excellent gesture integration
3. **Parallax**: Built-in parallax components

### When to Choose
- When you need the most natural spring physics
- Physics-based interactive elements
- Complex gesture-based interactions

---

## 4. CSS Animations + Keyframes

### Bundle Size
- **0KB** - Native browser feature
- No JavaScript overhead

### Performance
- **GPU utilization**: Excellent for `transform` and `opacity`
- **Runtime overhead**: None - browser-native
- **Mobile performance**: Excellent
- **Battery**: Most efficient

### Ease of Use
- **Learning curve**: Easy
- **React integration**: Via CSS modules or styled-components
- **TypeScript**: N/A (CSS)
- **Documentation**: Universal

### Key Features
- ✅ **Simple transitions**: Hover, focus states
- ✅ **Keyframes**: Infinite loops, complex sequences
- ✅ **Hardware acceleration**: `transform3d()` trick
- ❌ **Mouse tracking**: Not possible without JS
- ❌ **Scroll-triggered**: Limited (CSS scroll-driven animations emerging)
- ❌ **Spring physics**: Not available
- ❌ **Dynamic values**: Requires CSS variables + JS

### Portfolio-Specific Use Cases
1. **Button hover effects**: Simple transitions
2. **Loading spinners**: Keyframe animations
3. **Fade/slide effects**: Enter/exit animations
4. **Text glow**: CSS text-shadow animations
5. **Background animations**: Infinite gradient shifts

### Best Practices
```css
/* Hardware accelerated */
.element {
  transform: translateZ(0); /* Force GPU */
  will-change: transform; /* Hint browser */
}

/* Animate only these properties for 60fps */
/* transform, opacity, filter */
```

---

## 5. Lottie

### Bundle Size
- **Library**: ~30-50KB gzipped
- **Animation files**: 10KB-500KB+ (JSON)
- **Total impact**: Can be significant

### Performance
- **GPU utilization**: Good (SVG/Canvas rendering)
- **Runtime overhead**: Moderate
- **Mobile performance**: Good for simple animations
- **File size**: Large JSON files

### Ease of Use
- **Learning curve**: Easy
- **React integration**: `lottie-react` package
- **TypeScript**: Good support
- **Documentation**: Good

### Key Features
- ✅ **Vector animations**: After Effects export
- ✅ **Complex illustrations**: Multi-layer animations
- ❌ **Mouse tracking**: Limited
- ❌ **3D transforms**: 2D only
- ❌ **Real-time control**: Limited programmatic access
- ✅ **Small file sizes**: Compared to GIF/video

### Portfolio-Specific Use Cases
1. **Animated illustrations**: Hero section graphics
2. **Loading animations**: Complex branded loaders
3. **Empty states**: Animated illustrations
4. **Icon animations**: Micro-interactions

---

## 6. Rive

### Bundle Size
- **Runtime**: ~20-30KB gzipped
- **Animation files**: Smaller than Lottie
- **Renderers**: WASM-based, very efficient

### Performance
- **GPU utilization**: Excellent - custom renderer
- **Runtime overhead**: Low
- **Mobile performance**: Excellent - 120fps capable
- **File size**: ~50% smaller than Lottie

### Ease of Use
- **Learning curve**: Easy
- **React integration**: Official React runtime
- **TypeScript**: Good support
- **Documentation**: Excellent

### Key Features
- ✅ **Interactive state machines**: Game-like logic
- ✅ **Real-time control**: Full programmatic access
- ✅ **Mouse tracking**: Built-in state machine inputs
- ✅ **Small files**: Binary format
- ✅ **Multiple renderers**: Canvas, WebGL, WASM
- ❌ **After Effects**: Separate workflow

### Portfolio-Specific Use Cases
1. **Interactive hero animations**: Mouse-responsive graphics
2. **Animated buttons**: State-driven micro-interactions
3. **Gamified elements**: Game-like interactive components
4. **Real-time data viz**: Data-driven animations

---

## 7. Three.js / React Three Fiber (R3F)

### Bundle Size
- **Three.js**: ~150KB+ gzipped
- **React Three Fiber**: ~30KB
- **Total**: ~180-600KB+ (with extras)
- **Code splitting**: Essential

### Performance
- **GPU utilization**: Full WebGL utilization
- **Runtime overhead**: Higher - 3D rendering
- **Mobile performance**: Variable - requires optimization
- **60fps**: Achievable with optimization

### Ease of Use
- **Learning curve**: Steep - 3D concepts required
- **React integration**: Excellent via R3F
- **TypeScript**: Good support
- **Documentation**: Good (R3F), extensive (Three.js)

### Key Features
- ✅ **True 3D**: Full 3D scenes with lighting
- ✅ **WebGL**: Hardware-accelerated 3D
- ✅ **Post-processing**: Bloom, DOF, etc.
- ✅ **Shaders**: Custom GLSL shaders
- ✅ **Physics**: Cannon.js, Rapier integration
- ✅ **Mouse tracking**: Raycasting for interactions
- ❌ **Bundle size**: Large
- ❌ **Mobile**: Can be heavy

### Portfolio-Specific Use Cases
1. **3D hero sections**: Immersive 3D environments
2. **Particle systems**: 3D particle effects
3. **Interactive 3D models**: Product showcases
4. **Shader backgrounds**: WebGL gradient meshes
5. **Portfolio 3D navigation**: 3D space navigation

### Performance Optimization
```tsx
// Lazy load 3D components
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div>Loading 3D...</div>
});
```

---

## Portfolio Animation Recommendations by Use Case

### Text Decode/Scramble Effects
**Best Choice**: Framer Motion (Motion+)
- Native scramble text effect
- Smooth character animations
- Easy implementation

**Alternative**: GSAP + SplitText
- More control over timing
- Better for complex text sequences

### 3D Card Tilts
**Best Choice**: Framer Motion
- Native mouse tracking integration
- Built-in 3D transforms
- Smooth spring physics

```tsx
// Framer Motion implementation
<motion.div
  style={{ transformPerspective: 1000 }}
  whileHover={{ rotateX: 10, rotateY: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
```

### Magnetic Buttons
**Best Choice**: Framer Motion
- `whileHover` with spring physics
- `useMotionValue` for mouse position
- Clean React integration

```tsx
// Magnetic button with Framer Motion
const x = useMotionValue(0);
const y = useMotionValue(0);

<motion.button
  style={{ x, y }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  }}
  onMouseLeave={() => { x.set(0); y.set(0); }}
/>
```

### Parallax Scrolling
**Best Choice**: Framer Motion
- `useScroll` + `useTransform` hooks
- Native scroll-linked animations
- Best React integration

**Alternative**: GSAP ScrollTrigger
- More complex scroll sequences
- Pinning capabilities
- Better for narrative scroll experiences

```tsx
// Parallax with Framer Motion
const { scrollY } = useScroll();
const y1 = useTransform(scrollY, [0, 500], [0, 200]);
const y2 = useTransform(scrollY, [0, 500], [0, -200]);
```

### Particle Systems
**Best Choice**: Three.js / React Three Fiber
- True 3D particles
- GPU-accelerated rendering
- Complex interactions

**Alternative**: Canvas 2D + GSAP
- Lighter weight
- Good for simpler particles

### Smooth Page Transitions
**Best Choice**: Framer Motion
- `<AnimatePresence>` for exit animations
- Built-in page transition support
- Layout animations

```tsx
// Page transitions in Next.js
import { AnimatePresence } from "motion/react";

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

### Complex Scroll Animations
**Best Choice**: GSAP ScrollTrigger
- Pinning sections
- Scrubbing animations
- Timeline control

**Alternative**: Framer Motion
- Simpler scroll-triggered reveals
- Good for basic scroll effects

### Loading Animations
**Best Choice**: Lottie or Rive
- Complex vector animations
- After Effects workflow (Lottie)
- Interactive state machines (Rive)

### Simple Hover Effects
**Best Choice**: CSS
- Zero bundle size
- Native browser optimization
- Perfect for buttons, links

```css
.button {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

---

## Recommended Tech Stack for Cyber-Nerd Portfolio

### Core Animation Stack

```json
{
  "dependencies": {
    "motion": "^12.x",           // Framer Motion - primary
    "gsap": "^3.x",              // GSAP - scroll + complex
    "@gsap/react": "^2.x",       // React integration
    "lenis": "^1.x"              // Smooth scrolling
  }
}
```

### Recommended Combinations

#### Option 1: Minimal & Performant
- **Framer Motion** - 90% of animations
- **CSS** - Hover effects, simple transitions
- **Bundle impact**: ~5-10KB

#### Option 2: Feature-Rich
- **Framer Motion** - UI animations, gestures, page transitions
- **GSAP + ScrollTrigger** - Complex scroll sequences
- **Lenis** - Smooth scroll normalization
- **Bundle impact**: ~50-70KB

#### Option 3: 3D Immersive
- **Framer Motion** - 2D UI animations
- **React Three Fiber** - 3D hero section
- **GSAP** - Scroll control for 3D
- **Bundle impact**: ~200KB+ (code-split)

---

## When to Use CSS vs JavaScript Animations

### Use CSS When:
- ✅ Simple hover/focus states
- ✅ Infinite looping animations
- ✅ Opacity and transform changes
- ✅ Loading spinners
- ✅ Button micro-interactions
- ✅ Static entrance animations

### Use JavaScript When:
- ✅ Mouse tracking required
- ✅ Scroll-linked animations
- ✅ Complex sequences
- ✅ Dynamic values
- ✅ Physics-based motion
- ✅ Gesture interactions
- ✅ Layout transitions

### Hybrid Approach Example
```tsx
// CSS for hover, JS for mouse tracking
<motion.button
  className="btn-hover-effect"  // CSS hover styles
  whileHover={{ scale: 1.05 }}   // JS spring enhancement
>
  Click me
</motion.button>
```

---

## Performance Best Practices

### General
1. **Animate only**: `transform`, `opacity`, `filter`
2. **Avoid**: `width`, `height`, `top`, `left` (causes reflow)
3. **Use `will-change`**: Sparingly, before animation
4. **Throttle**: Mouse move events to 60fps
5. **Reduce motion**: Respect `prefers-reduced-motion`

### Framer Motion
```tsx
// Use LazyMotion for smaller bundles
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

<LazyMotion features={domAnimation}>
  <m.div animate={{ x: 100 }} />
</LazyMotion>
```

### GSAP
```tsx
// Use transforms, avoid layout properties
gsap.to(element, {
  x: 100,        // Good - transform
  scale: 1.2,    // Good - transform
  // width: 200, // Bad - causes reflow
});
```

### CSS
```css
/* Force GPU acceleration */
.animated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Use transform instead of position */
/* Good: */
.animated { transform: translateX(100px); }
/* Bad: */
.animated { left: 100px; }
```

---

## Final Recommendations for Cyber-Nerd Portfolio

### Primary Choice: Framer Motion
**Rationale**:
- Best React integration
- Excellent developer experience
- Handles 90% of portfolio needs
- Good performance on mobile
- Scramble text effect built-in
- Best for cyber-nerd aesthetic

### Secondary: GSAP + ScrollTrigger
**For**:
- Complex scroll sequences
- Text splitting effects
- Timeline-based animations
- Pinning sections

### CSS
**For**:
- All hover effects
- Simple transitions
- Loading states
- Background animations

### Optional: Three.js / R3F
**For**:
- Hero section 3D element
- Particle system
- WebGL shader backgrounds
- Use with code-splitting!

### Smooth Scrolling: Lenis
**Essential for**:
- Premium scroll feel
- Normalizing scroll behavior
- Working with both Framer Motion and GSAP

---

## Quick Decision Tree

```
Simple hover/focus? → CSS
Scroll-triggered reveal? → Framer Motion whileInView
Complex scroll sequence? → GSAP ScrollTrigger
Mouse tracking needed? → Framer Motion
Page transitions? → Framer Motion AnimatePresence
3D transforms on cards? → Framer Motion
True 3D scene? → Three.js / R3F
Vector illustration animation? → Lottie or Rive
Physics-based motion? → Framer Motion or React Spring
```
