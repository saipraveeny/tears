# Tears. - Hot Sauce that Heals

A modern, responsive React application for Tears, the premium hot sauce brand revolutionizing the food industry with artisanal, health-conscious sauces.

## 🚀 Features

- **Modern Design**: Sleek, futuristic UI inspired by Apple and Stripe dashboards
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Glassmorphic Elements**: Beautiful glass and neumorphic design elements
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Product modals, contact forms, and smooth navigation
- **Performance Optimized**: Optimized for fast loading and smooth performance

## 🎨 Design System

- **Color Palette**: Black and red theme with glassmorphic accents
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth transitions and micro-interactions throughout
- **Components**: Reusable, animated components with consistent styling

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and modern patterns
- **Framer Motion**: Advanced animations and transitions
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Modern CSS with custom properties and animations
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Tears_website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section with animated bottle
│   ├── Features.js      # Key features showcase
│   ├── Products.js      # Product catalog with modals
│   ├── Benefits.js      # Health benefits section
│   ├── Testimonials.js  # Customer testimonials
│   ├── Contact.js       # Contact form and info
│   └── Footer.js        # Footer with links
├── App.js               # Main application component
├── App.css              # App-specific styles
├── components.css       # Component styles
├── index.js             # React entry point
└── index.css            # Global styles
```

## 🎯 Key Sections

### Hero Section

- Animated bottle visualization
- Particle effects
- Call-to-action buttons
- Key statistics

### Features

- Zero fat, preservatives, and water
- All-natural spice blends
- Interactive cards with hover effects

### Products

- Three variants: Wild, Glitch, COHC
- Heat level indicators
- Product modals with detailed information
- Add to cart functionality

### Benefits

- Health benefits showcase
- Antioxidant properties
- Anti-inflammatory benefits
- Statistics and metrics

### Testimonials

- Customer reviews
- Chef testimonials
- Rating system
- Professional endorsements

### Contact

- Contact form
- Business information
- Social media links
- Business hours

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🎨 Customization

### Colors

Modify the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-black: #0a0a0a;
  --accent-red: #ff3b30;
  /* ... other colors */
}
```

### Animations

Adjust animation timing and easing in component files:

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- Use functional components with hooks
- Implement proper TypeScript-like prop validation
- Follow consistent naming conventions
- Use CSS custom properties for theming

## 🌟 Performance Features

- Lazy loading of components
- Optimized animations
- Efficient re-renders
- Minimal bundle size
- Fast loading times

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:

- Email: hello@tears.com
- Phone: +1 (555) 123-4567

---

**Tears. - Hot Sauce that Heals** 🥵❤️
