# 🚀 Trading Crypto Academy - Landing Page & Admin Dashboard

Sebuah website modern untuk kursus trading cryptocurrency yang dilengkapi dengan admin dashboard untuk mengelola konten. Dibangun dengan teknologi web terkini dan dirancang untuk memberikan pengalaman pengguna yang optimal.

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [👥 For Users](#-for-users)
- [💻 For Developers](#-for-developers)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🔐 Security](#-security)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

Trading Crypto Academy adalah platform edukasi trading cryptocurrency yang menyediakan:
- **Landing Page** yang menarik untuk mempromosikan kursus
- **Admin Dashboard** untuk mengelola semua konten website
- **WhatsApp Integration** untuk pendaftaran langsung
- **Responsive Design** yang optimal di semua device

## ✨ Features

### 🌟 Landing Page Features
- **Hero Section** dengan call-to-action WhatsApp
- **Features Section** untuk menampilkan keunggulan kursus
- **Packages Section** dengan berbagai paket berlangganan
- **Testimonials Section** untuk review dari member
- **FAQ Section** untuk pertanyaan yang sering diajukan
- **Responsive Design** untuk semua ukuran layar
- **Modern Animations** dan micro-interactions

### 🔧 Admin Dashboard Features
- **Content Management System (CMS)** lengkap
- **Hero Content Editor** untuk mengubah konten utama
- **Features Manager** untuk mengelola fitur-fitur
- **Packages Manager** untuk mengelola paket kursus
- **Testimonials Manager** untuk mengelola review
- **FAQs Manager** untuk mengelola pertanyaan
- **Real-time Preview** perubahan konten
- **Secure Authentication** dengan session management

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern JavaScript library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Lightning fast build tool

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation tool
- **Autoprefixer 10.4.18** - CSS vendor prefixes

### Icons & Assets
- **Lucide React 0.344.0** - Beautiful icon library

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **React Hooks ESLint Plugin** - React hooks linting

## 📁 Project Structure

```
trading-crypto-academy/
├── 📁 public/                    # Static assets
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 admin/             # Admin dashboard components
│   │   │   ├── AdminApp.tsx      # Main admin application
│   │   │   ├── AdminLayout.tsx   # Admin layout wrapper
│   │   │   ├── Dashboard.tsx     # Admin dashboard home
│   │   │   ├── LoginForm.tsx     # Admin login form
│   │   │   ├── HeroContentManager.tsx
│   │   │   ├── FeaturesManager.tsx
│   │   │   ├── PackagesManager.tsx
│   │   │   ├── TestimonialsManager.tsx
│   │   │   └── FAQsManager.tsx
│   │   └── LandingPage.tsx       # Main landing page
│   ├── 📁 contexts/
│   │   ├── AuthContext.tsx       # Authentication context
│   │   └── ContentContext.tsx    # Content management context
│   ├── 📁 types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles
│   └── vite-env.d.ts            # Vite type definitions
├── 📄 index.html                 # HTML template
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.js         # Tailwind configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 vite.config.ts             # Vite configuration
└── 📄 eslint.config.js           # ESLint configuration
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 atau lebih tinggi)
- **npm** atau **yarn** package manager
- **Git** (opsional)

### Installation

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd trading-crypto-academy
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Open Browser**
   - Landing Page: `http://localhost:5173`
   - Admin Dashboard: `http://localhost:5173/admin`

## 👥 For Users

### 🌐 Mengakses Website

#### Landing Page
- Buka `http://localhost:5173` di browser
- Jelajahi berbagai section: Hero, Features, Packages, Testimonials, FAQ
- Klik tombol "Daftar via WhatsApp" untuk pendaftaran

#### Admin Dashboard
- Buka `http://localhost:5173/admin`
- Login dengan kredensial:
  - **Username**: `admin`
  - **Password**: `admin123`

### 📝 Mengelola Konten (Admin)

#### 1. Hero Content
- Edit judul utama, subtitle, dan deskripsi
- Update nomor WhatsApp untuk pendaftaran
- Perubahan langsung terlihat di landing page

#### 2. Features Management
- Tambah, edit, atau hapus fitur-fitur kursus
- Pilih icon dari library Lucide React
- Tulis deskripsi yang menarik

#### 3. Packages Management
- Kelola paket-paket kursus (harian, mingguan, bulanan)
- Set harga dan fitur untuk setiap paket
- Tandai paket populer dengan badge khusus

#### 4. Testimonials Management
- Tambah review dari member
- Set rating bintang (1-5)
- Include nama dan profesi reviewer

#### 5. FAQs Management
- Kelola pertanyaan yang sering diajukan
- Format accordion yang user-friendly
- Update jawaban sesuai kebutuhan

### 📱 WhatsApp Integration

Website terintegrasi dengan WhatsApp Business:
- Tombol CTA otomatis membuka WhatsApp
- Pre-filled message untuk memudahkan pendaftaran
- Update nomor WhatsApp melalui admin dashboard

## 💻 For Developers

### 🔧 Development Setup

#### VS Code Extensions (Recommended)
```
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter
- ESLint
- GitLens
```

#### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
npm update           # Update dependencies
```

### 🏗️ Architecture Overview

#### Component Architecture
- **Functional Components** dengan React Hooks
- **Context API** untuk state management
- **TypeScript** untuk type safety
- **Modular Design** dengan separation of concerns

#### State Management
```typescript
// Authentication Context
const { user, login, logout, isAuthenticated } = useAuth();

// Content Management Context
const { 
  heroContent, features, packages, testimonials, faqs,
  updateHeroContent, addFeature, updateFeature, deleteFeature
} = useContent();
```

#### Data Persistence
- **localStorage** untuk menyimpan data admin
- **Session-based** authentication
- **Real-time** content updates

### 🎨 Styling Guidelines

#### Tailwind CSS Classes
```css
/* Layout */
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Cards */
.card-glass {
  @apply bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20;
}

/* Buttons */
.btn-primary {
  @apply bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600;
}
```

#### Design System
- **Color Palette**: Blue, Teal, Yellow gradients
- **Typography**: System fonts dengan hierarchy yang jelas
- **Spacing**: 8px grid system
- **Border Radius**: Rounded corners (8px, 12px, 16px)
- **Shadows**: Subtle glassmorphism effects

### 🔄 Adding New Features

#### 1. Create New Component
```typescript
// src/components/admin/NewManager.tsx
import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';

const NewManager: React.FC = () => {
  // Component logic here
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default NewManager;
```

#### 2. Update Context
```typescript
// src/contexts/ContentContext.tsx
interface ContentContextType {
  // Add new state and methods
  newData: NewDataType[];
  addNewData: (data: Omit<NewDataType, 'id'>) => void;
}
```

#### 3. Add to Admin Navigation
```typescript
// src/components/admin/AdminLayout.tsx
const menuItems = [
  // Existing items...
  { id: 'new-feature', label: 'New Feature', icon: NewIcon },
];
```

### 🧪 Testing

#### Manual Testing Checklist
- [ ] Landing page loads correctly
- [ ] Admin login works
- [ ] All CRUD operations function
- [ ] WhatsApp links work
- [ ] Responsive design on mobile/tablet
- [ ] Content persists after refresh

#### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔧 Configuration

### Environment Variables
```env
# Tidak ada environment variables yang diperlukan
# Semua konfigurasi ada di dalam kode
```

### WhatsApp Configuration
```typescript
// Update di src/contexts/ContentContext.tsx
const defaultHeroContent: HeroContent = {
  whatsappNumber: "6281234567890" // Ganti dengan nomor Anda
};
```

### Admin Credentials
```typescript
// Update di src/contexts/AuthContext.tsx
if (username === 'admin' && password === 'admin123') {
  // Ganti kredensial default
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

### Mobile-First Approach
- Design dimulai dari mobile
- Progressive enhancement untuk desktop
- Touch-friendly interface
- Optimized loading untuk mobile

## 🔐 Security

### Authentication
- **Session-based** authentication
- **localStorage** untuk persistence
- **Route protection** untuk admin area
- **Input validation** pada semua form

### Data Security
- **Client-side only** - tidak ada backend
- **No sensitive data** disimpan di localStorage
- **XSS protection** melalui React's built-in sanitization

### Best Practices
- Regular dependency updates
- ESLint untuk code quality
- TypeScript untuk type safety
- Secure coding practices

## 🚀 Deployment

### Build Production
```bash
npm run build
```

### Deployment Options

#### 1. Netlify
```bash
# Build command
npm run build

# Publish directory
dist

# Redirects for SPA
echo "/*    /index.html   200" > dist/_redirects
```

#### 2. Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### 3. GitHub Pages
```bash
# Build project
npm run build

# Deploy dist folder to gh-pages branch
```

#### 4. Traditional Hosting
- Upload folder `dist` ke web hosting
- Pastikan server mendukung SPA routing

### Environment Setup
```bash
# Production build
NODE_ENV=production npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

### Development Workflow
1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Follow ESLint rules
- Use TypeScript for type safety
- Write descriptive commit messages
- Test on multiple browsers
- Maintain responsive design

### Pull Request Guidelines
- Describe changes clearly
- Include screenshots for UI changes
- Test thoroughly before submitting
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

#### 2. Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. Build Errors
```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix ESLint issues
npm run lint -- --fix
```

### Getting Help
- 📧 Email: support@tradingcryptoacademy.com
- 💬 WhatsApp: +62 812-3456-7890
- 🐛 Issues: [GitHub Issues](https://github.com/username/repo/issues)

---

**Trading Crypto Academy** - Memberdayakan trader Indonesia dengan edukasi crypto trading berkualitas tinggi.

Made with ❤️ using React, TypeScript, and Tailwind CSS.