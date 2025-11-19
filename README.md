# Bus Booking Search Application

A modern, responsive bus booking search application built with Next.js 14, TypeScript, and Tailwind CSS. This application allows users to search for bus tickets across Vietnam with an intuitive interface and comprehensive form validation.

## 🚀 Demo

**Live Demo**: [Coming Soon - Deploy to Vercel]

## ✨ Features

- **🚌 Bus Search**: Comprehensive search form with autocomplete location selection
- **📍 Location Autocomplete**: Smart location search with Vietnamese cities and landmarks
- **📅 Date Selection**: User-friendly date pickers with validation
- **👥 Passenger Counter**: Intuitive passenger selection with increment/decrement controls
- **🔄 Trip Types**: Support for one-way and round-trip bookings
- **✅ Form Validation**: Comprehensive client-side validation with clear error messages
- **📱 Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, professional design with hover/focus states
- **⚡ Fast Navigation**: Client-side routing with URL-based state management

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation

### Additional Libraries

- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Homepage with search form
│   ├── search/            # Search results page
│   └── globals.css        # Global CSS with Tailwind directives
├── components/            # Reusable UI components
│   ├── Autocomplete.tsx   # Location search with dropdown
│   ├── BusSearchForm.tsx  # Main search form component
│   ├── DatePicker.tsx     # Date selection component
│   ├── PassengerCounter.tsx # Passenger count selector
│   └── Tabs.tsx          # Tab navigation component
├── data/                  # Static data files
│   └── locations.json     # Vietnamese locations for autocomplete
└── types/                 # TypeScript type definitions
    └── index.ts          # Shared type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd test-frontenddeveloper
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Start development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📋 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality
- **`npm run type-check`** - Run TypeScript type checking

## 🏗️ Architecture & Design Decisions

### Component Architecture

- **Modular Components**: Each UI component is self-contained with its own props interface
- **Controlled Components**: All form inputs use controlled state for predictable behavior
- **Composition Pattern**: Components are composed together rather than deeply nested

### State Management

- **URL-based State**: Search parameters are stored in the URL for shareability and browser history
- **React Hook Form**: Efficient form state management with minimal re-renders
- **Local Component State**: UI-specific state (dropdowns, loading) managed locally

### Type Safety

- **Strict TypeScript**: Comprehensive type definitions for all data structures
- **Interface Segregation**: Separate interfaces for different concerns (Location, SearchFormData, etc.)
- **Type Guards**: Runtime type checking where necessary

### Styling Strategy

- **Utility-First CSS**: Tailwind CSS for rapid UI development
- **Component Variants**: Conditional classes for different states (error, disabled, etc.)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Design System**: Consistent color palette, spacing, and typography

### Performance Optimizations

- **Next.js App Router**: Automatic code splitting and optimized bundling
- **Client Components**: Only interactive components marked as client-side
- **Lazy Loading**: Dynamic imports for non-critical components
- **Optimized Images**: Next.js automatic image optimization

## 🔧 Key Components

### BusSearchForm

The main search form component that handles:

- Form state management with React Hook Form
- Real-time validation with error messaging
- Location swapping functionality
- URL parameter generation for navigation

### Autocomplete

Smart location search component featuring:

- Fuzzy search across location names and cities
- Keyboard navigation support
- Click-outside to close functionality
- Visual indicators for different location types

### DatePicker & PassengerCounter

Specialized input components with:

- Custom styling to match design system
- Built-in validation logic
- Accessible keyboard interaction
- Clear error state indication

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563EB) for CTAs and active states
- **Secondary**: Gray scales for text and borders
- **Semantic**: Red for errors, Green for success
- **Background**: Light gray (#F9FAFB) for page background

### Typography

- **Font**: Inter (via Google Fonts)
- **Scale**: Consistent type scale from text-sm to text-4xl
- **Weight**: Strategic use of font weights for hierarchy

### Spacing

- **Consistent Grid**: 4px base unit (Tailwind's spacing scale)
- **Component Spacing**: Logical spacing between related elements
- **Page Layout**: Generous whitespace for readability

## 🚦 Form Validation

### Client-Side Validation Rules

- **From/To Locations**: Required, cannot be the same
- **Departure Date**: Required, cannot be in the past
- **Return Date**: Must be after departure date (if selected)
- **Passengers**: Minimum 1, maximum 20
- **Real-time Feedback**: Immediate error display and clearing

### Error Handling

- **Field-Level Errors**: Individual error messages per field
- **Form-Level Validation**: Overall form state validation
- **User-Friendly Messages**: Clear, actionable error messages in Vietnamese

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive grid)
- **Desktop**: > 1024px (full multi-column layout)

### Mobile Optimizations

- **Touch-Friendly**: Adequate touch target sizes (44px minimum)
- **Swipe Gestures**: Natural mobile interaction patterns
- **Performance**: Optimized for slower mobile connections

## 🔍 SEO & Accessibility

### SEO Features

- **Meta Tags**: Comprehensive meta descriptions and titles
- **Structured Data**: Semantic HTML structure
- **URL Structure**: Clean, descriptive URLs

### Accessibility

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader friendly component labeling
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations

## 🚀 Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Configure build settings (automatic for Next.js)
3. Deploy with automatic CI/CD

### Alternative Platforms

- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 🐛 Known Limitations

1. **Mock Data**: Location data is static JSON (in real app, would use API)
2. **Search Results**: Placeholder results (would integrate with booking API)
3. **Payment**: No payment integration (out of scope)
4. **User Accounts**: No authentication system

## 🔮 Future Enhancements

- **Real-time Search**: Integration with live bus inventory APIs
- **User Authentication**: User accounts and booking history
- **Payment Integration**: Secure payment processing
- **Multi-language**: Support for English and other languages
- **Progressive Web App**: Offline functionality and app-like experience
- **Advanced Filters**: Price range, amenities, operator filtering

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please contact [Your Name] at [your.email@example.com]

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
