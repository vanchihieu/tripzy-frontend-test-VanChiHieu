# Tripzy - Travel Booking Application

A modern, responsive travel booking search application built with Next.js 14, TypeScript, and Tailwind CSS. This application allows users to search for bus tickets, hotels, and flights with an intuitive interface matching the Figma design specifications.

## 🚀 Demo

**Live Demo**: [Deploy to Vercel - Coming Soon]  
**Design Reference**: [Figma Design](https://www.figma.com/design/Hop8fpSdUBnIVgWaRd2v0q/UI-Test-Nov-2025)

## ✨ Features

- **🚌 Multi-Modal Search**: Bus & Shuttle, Hotel & Accommodation, Flight booking
- **📍 Smart Autocomplete**: Location search with dropdown suggestions
- **📅 Date Selection**: User-friendly date pickers with validation
- **👥 Passenger Counter**: Intuitive passenger selection interface
- **🔄 Trip Types**: Support for one-way and round-trip bookings
- **✅ Form Validation**: Comprehensive client-side validation with clear error messages
- **📱 Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **🎨 Figma-Accurate**: Pixel-perfect implementation of provided design
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
│   └── locations.json     # Location data for autocomplete
└── types/                 # TypeScript type definitions
    └── index.ts          # Shared type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **Package Manager**: npm, yarn, or pnpm

### Installation & Running

#### Using npm

```bash
# Clone the repository
git clone <repository-url>
cd test-frontenddeveloper

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
```

#### Using yarn

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Type checking
yarn type-check

# Linting
yarn lint
```

#### Using pnpm

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Development Server

After running the dev command, open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality
- **`npm run type-check`** - Run TypeScript type checking

## 🏗️ Architecture & Technical Decisions

### Core Technologies

- **Next.js 14** with App Router - React framework for production-ready applications
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Hook Form** - Performant forms with easy validation
- **Lucide React** - Beautiful & consistent icon library

### Architecture Decisions

#### **Component Architecture**

- **Modular Design**: Self-contained components with clear prop interfaces
- **Controlled Components**: All form inputs use controlled state for predictable behavior
- **Composition over Inheritance**: Components composed together rather than deeply nested
- **Single Responsibility**: Each component has one clear purpose

#### **State Management**

- **URL-based State**: Search parameters stored in URL for shareability and browser history
- **Form State**: React Hook Form for efficient form management with minimal re-renders
- **Local State**: UI-specific state (dropdowns, modals) managed at component level
- **No Global State**: Avoided complex state management libraries for simplicity

#### **Type Safety**

- **Strict TypeScript**: Comprehensive type definitions for all data structures
- **Interface Segregation**: Separate interfaces for different concerns
- **Type Guards**: Runtime type checking where necessary
- **Generic Components**: Reusable typed components

#### **Styling Strategy**

- **Design System**: Consistent cyan color scheme matching Figma specifications
- **Utility-First**: Tailwind CSS for rapid development and consistency
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Component Variants**: Conditional classes for different states (hover, focus, error)
- **Accessibility**: WCAG compliant color contrast and keyboard navigation

#### **Performance Optimizations**

- **App Router**: Next.js 14 App Router for automatic code splitting
- **Server Components**: Static content served from server when possible
- **Client Boundaries**: Minimal client-side JavaScript for interactivity only
- **Bundle Optimization**: Tree shaking and module federation

#### **Development Experience**

- **ESLint**: Code quality and consistency enforcement
- **TypeScript**: Compile-time error detection and IntelliSense
- **Hot Reloading**: Instant feedback during development
- **Clear Project Structure**: Organized folders and naming conventions

## 🔧 Key Components

### BusSearchForm

The main search form component that handles:

- Form state management with React Hook Form
- Real-time validation with error messaging
- Location autocomplete functionality
- URL parameter generation for navigation

### Autocomplete

Smart location search component featuring:

- Fuzzy search across location names
- Keyboard navigation support
- Click-outside to close functionality
- Visual indicators for different location types

### DatePicker & PassengerCounter

Specialized input components with:

- Custom styling matching design system
- Built-in validation logic
- Accessible keyboard interaction
- Clear error state indication

## 🎨 Design System

### Colors

- **Primary**: Cyan (#22d3ee) for CTAs and active states
- **Secondary**: Gray scales for text and borders
- **Semantic**: Red for errors, Green for success
- **Background**: Light blue gradient for page background

### Typography

- **Font**: Inter (via Google Fonts)
- **Scale**: Consistent type scale from text-sm to text-5xl
- **Weight**: Strategic use of font weights for hierarchy

### Spacing

- **Consistent Grid**: 4px base unit (Tailwind's spacing scale)
- **Component Spacing**: Logical spacing between related elements
- **Page Layout**: Generous whitespace for readability

## 🚦 Form Validation

### Validation Rules

- **From/To Locations**: Required, cannot be the same
- **Departure Date**: Required, cannot be in the past
- **Return Date**: Must be after departure date (if selected)
- **Passengers**: Minimum 1, maximum 20
- **Real-time Feedback**: Immediate error display and clearing

### Error Handling

- **Field-Level Errors**: Individual error messages per field
- **Form-Level Validation**: Overall form state validation
- **User-Friendly Messages**: Clear, actionable error messages in English

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive grid)
- **Desktop**: > 1024px (full multi-column layout)

### Mobile Optimizations

- **Touch-Friendly**: Adequate touch target sizes (44px minimum)
- **Performance**: Optimized for slower mobile connections
- **Layout**: Stack form elements vertically on smaller screens

## 🚀 Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Configure build settings (automatic for Next.js)
3. Deploy with automatic CI/CD

### Alternative Platforms

- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

### Environment Variables

No environment variables required for basic functionality.

## 🐛 Known Limitations

1. **Mock Data**: Location data is static JSON (in real app, would use API)
2. **Search Results**: Placeholder results (would integrate with booking API)
3. **Payment**: No payment integration (out of scope)
4. **User Accounts**: No authentication system

## 🔮 Future Enhancements

- **Real-time Search**: Integration with live travel inventory APIs
- **User Authentication**: User accounts and booking history
- **Payment Integration**: Secure payment processing
- **Multi-language**: Support for Vietnamese and other languages
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

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
