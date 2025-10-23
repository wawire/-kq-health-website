# KQ Health - Kenya Airways Healthcare Division

A modern, responsive healthcare website for Kenya Airways' medical services division, offering travel health, medical tourism, corporate health solutions, and special needs assistance.

## Overview

KQ Health is the healthcare arm of Kenya Airways, providing comprehensive medical services for travelers, corporate clients, and individuals with special needs. This website serves as the digital platform for booking appointments, accessing health information, and exploring our range of medical services.

## Features

### Core Services
- **Travel Health** - Yellow fever vaccination, travel medicine, health certificates
- **Medical Tourism** - International healthcare facilitation and air ambulance services
- **Corporate Health** - Workplace wellness programs and occupational health solutions
- **Medical Special Needs** - Accessibility support and medical assistance for travelers

### Website Capabilities
- Online appointment booking system with real-time availability
- Comprehensive service information pages with visual design
- Responsive design for mobile, tablet, and desktop
- Accessible interface with ARIA labels and semantic HTML
- Animated statistics and testimonials for enhanced engagement
- Integration-ready for email notifications and calendar sync

## Tech Stack

### Frontend
- **Next.js 15.5** - React framework with App Router
- **React 19.1** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12.23** - Scroll animations and transitions

### UI Components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management
- **Shadcn UI** - Reusable component patterns

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/wawire/-kq-health-website.git
cd -kq-health-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file in the root directory (see `.env.example` for reference):

```env
# Email Configuration (for appointment confirmations)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# Calendar Integration (optional)
CALENDAR_API_KEY=your-calendar-api-key

# Database (for future appointment storage)
DATABASE_URL=your-database-connection-string
```

## Project Structure

```
-kq-health-website/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── book-appointment/     # Appointment booking page
│   │   ├── travel-health/        # Travel health service page
│   │   ├── medical-tourism/      # Medical tourism service page
│   │   ├── corporate-health/     # Corporate health service page
│   │   ├── medical-special-needs/# Special needs service page
│   │   ├── api/                  # API routes
│   │   │   └── appointments/     # Appointment submission endpoint
│   │   ├── fonts/                # Local font files
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles
│   │
│   └── components/               # Reusable components
│       ├── booking/              # Appointment booking components
│       │   ├── BookingForm.tsx   # Main booking form
│       │   └── BookingHero.tsx   # Booking page hero
│       ├── shared/               # Shared UI components
│       │   ├── StatsSection.tsx  # Animated statistics
│       │   ├── Testimonials.tsx  # Customer testimonials
│       │   ├── ImageCard.tsx     # Image-backed cards
│       │   └── TrustBadges.tsx   # Trust indicators
│       └── ui/                   # Base UI components
│           ├── Button.tsx        # Button component
│           └── ...
│
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── .nvmrc                        # Node version specification
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── vercel.json                   # Vercel deployment config
└── package.json                  # Dependencies and scripts
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Deploy to Vercel (if configured)
```

## Key Features Breakdown

### 1. Appointment Booking System
- **Location**: `/book-appointment`
- **Form Validation**: Client-side and server-side validation
- **Services**: 12+ medical service types including vaccinations, consultations, medical exams
- **Clinics**: Multiple location support (JKIA, Moi Avenue, Westlands)
- **Time Slots**: 30-minute intervals from 8:00 AM to 4:30 PM
- **API Endpoint**: `POST /api/appointments`

**Features**:
- Personal information collection (name, email, phone, DOB)
- Appointment preferences (service, date, time, clinic)
- Medical history and insurance information
- Real-time form validation with error messages
- Appointment reference number generation
- Email confirmation ready (requires SMTP configuration)

### 2. Visual Design Components

**StatsSection** - Animated statistics display
- Scroll-triggered animations
- Icon support with ReactNode
- Dark mode variant
- Grid layout (2-4 columns)

**ImageCard** - Image-backed service cards
- Hover scale effects
- Gradient overlays
- CTA button support
- Unsplash image integration

**Testimonials** - Customer reviews
- Star ratings
- Author information with images
- Responsive grid layout
- Quote formatting

**TrustBadges** - Credibility indicators
- WHO approval
- ISO certification
- Years of service
- Global coverage stats

### 3. Service Pages

Each service page includes:
- Full-screen hero with background images
- Animated statistics section
- Visual service cards with images
- Process flow timeline
- Customer testimonials
- Trust indicators
- Call-to-action buttons

## Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with automatic preview URLs for pull requests.

#### One-Time Setup (15 minutes)

1. Visit [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Add New" → "Project"
4. Select `wawire/-kq-health-website`
5. Click "Import" → "Deploy"
6. Wait 2-3 minutes for deployment

#### Preview Workflow

For every pull request:
1. Create a feature branch
2. Make changes and commit
3. Push to GitHub
4. Create Pull Request
5. **Vercel automatically comments with preview URL**
6. Review changes on preview URL
7. Merge when satisfied

See `VERCEL_PREVIEW_WORKFLOW.md` for detailed workflow guide.

### Manual Deployment

Build the production version:

```bash
npm run build
npm run start
```

The optimized production build will be created in `.next/` directory.

## Development Workflow

### Creating a New Feature

1. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and test locally
```bash
npm run dev
```

3. Commit changes
```bash
git add .
git commit -m "feat: description of your feature"
```

4. Push to GitHub
```bash
git push -u origin feature/your-feature-name
```

5. Create Pull Request on GitHub
6. Wait for Vercel preview URL
7. Review and merge

### Commit Message Convention

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with local font loading
- CSS minification and purging
- Tree shaking for unused code
- Package import optimization for lucide-react and framer-motion

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)
- Focus indicators for form inputs

## Future Enhancements

- [ ] Database integration for appointment storage
- [ ] Email notification system for confirmations
- [ ] Calendar sync (Google Calendar, iCal)
- [ ] User authentication and appointment history
- [ ] Payment integration for services
- [ ] Multi-language support (English, Swahili)
- [ ] Live chat support
- [ ] Admin dashboard for appointment management
- [ ] SMS notifications via African SMS providers
- [ ] Integration with KQ booking system

## Documentation

- `SETUP_VERCEL_PREVIEW.md` - Quick setup guide for Vercel
- `VERCEL_PREVIEW_WORKFLOW.md` - Comprehensive workflow documentation
- `DESIGN_IMPROVEMENTS.md` - Design strategy and improvements
- `APPOINTMENT_SYSTEM.md` - Appointment booking system documentation
- `PREVIEW_INSTRUCTIONS.md` - Local preview setup guide

## License

Copyright © 2025 Kenya Airways - KQ Health Division. All rights reserved.

## Support

For issues, questions, or contributions:
- Create an issue on GitHub
- Contact: health@kenya-airways.com
- Website: https://www.kenya-airways.com/health

## Authors

- **Kenya Airways IT Team**
- **Development Partner**: Claude (Anthropic)

---

Built with Next.js 15 | Deployed on Vercel | Powered by Kenya Airways
