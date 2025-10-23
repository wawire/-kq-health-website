# How to Preview KQ Health Website Locally

## Prerequisites
- Node.js 18.17.0 or higher installed
- Git installed
- Terminal/Command Prompt

## Step-by-Step Instructions

### 1. Clone the Repository (if you haven't already)
```bash
git clone https://github.com/wawire/-kq-health-website.git
cd -kq-health-website
```

### 2. Switch to the Preview Branch
```bash
# Fetch all branches
git fetch origin

# Switch to the feature branch
git checkout claude/investigate-repo-content-011CUQDcXMnDdkqVMwkF9D39
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Open in Browser
The site will be available at:
**http://localhost:3000**

### Pages to Check:
- **Homepage:** http://localhost:3000
- **Travel Health (Enhanced):** http://localhost:3000/travel-health
- **Medical Tourism:** http://localhost:3000/medical-tourism
- **Corporate Health:** http://localhost:3000/corporate-health
- **Medical Special Needs:** http://localhost:3000/medical-special-needs
- **Book Appointment:** http://localhost:3000/book-appointment
- **About:** http://localhost:3000/about
- **Contact:** http://localhost:3000/contact

### What to Look For:

#### On Travel Health Page:
1. **Hero Section** - Large background image with overlays
2. **Trust Badges** - WHO, ISO certification badges
3. **Statistics** - Animated counters (50,000+ travelers, etc.)
4. **Image Cards** - 3 service cards with medical images
5. **Image + Text Layout** - Medical consultation photo with benefits
6. **Enhanced Vaccine Grid** - Color-coded vaccines with badges
7. **Visual Timeline** - 4-step colored timeline
8. **Testimonials** - Customer reviews with stars
9. **Final CTA** - Background image with call-to-action

#### Design Improvements to Notice:
- ✨ Scroll animations (elements fade in as you scroll)
- 🖼️ Real medical imagery from Unsplash
- 🎨 Better color contrast and typography
- 📊 Visual statistics and metrics
- ⭐ Customer testimonials
- 🎯 Professional trust indicators
- 📱 Fully responsive on all devices

### Troubleshooting

**If you see "Module not found" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**If port 3000 is already in use:**
```bash
# The dev server will automatically suggest port 3001
# Or specify a custom port:
npm run dev -- -p 3001
```

**If images don't load:**
- External images from Unsplash require internet connection
- Images may take a moment to load on first view

### Stop the Server
Press `Ctrl + C` in the terminal

## Comparing with Main Branch

### View Current Production (Main Branch):
```bash
# Save your work first
git stash

# Switch to main
git checkout main

# Install and run
npm install
npm run dev
```

### Switch Back to Preview:
```bash
git checkout claude/investigate-repo-content-011CUQDcXMnDdkqVMwkF9D39
git stash pop
npm run dev
```

## Share Preview with Team

If running locally, you can share using:

### Option A: Ngrok (expose localhost publicly)
```bash
# Install ngrok: https://ngrok.com/download
ngrok http 3000
```
This gives you a public URL like: `https://abc123.ngrok.io`

### Option B: Vercel Preview (Better)
```bash
vercel
```
Provides a permanent preview URL

## Questions?
Contact the development team or check the main README.md
