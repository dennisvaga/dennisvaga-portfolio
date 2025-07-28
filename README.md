# Dennis Vaga Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring internationalization (English/Hebrew), dark/light themes, and showcasing full-stack development projects.

## ✨ Features

- **🌐 Internationalization**: Full support for English and Hebrew with RTL layout
- **🎨 Modern Design**: Clean, professional design with dark/light theme switching
- **📱 Responsive**: Optimized for all device sizes
- **⚡ Performance**: Built with Next.js 15 and App Router for optimal performance
- **📧 Contact Form**: Working contact form with email integration using Resend
- **🔧 Type Safety**: Full TypeScript implementation
- **📊 Projects Showcase**: Interactive project cards with live demos and tech stacks

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **next-intl** - Internationalization
- **next-themes** - Dark/light theme support
- **Framer Motion** - Smooth animations
- **React Hook Form + Zod** - Form handling and validation

### Services

- **Resend** - Email service for contact form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dennisvaga/dennisvaga-portfolio.git
   cd dennisvaga-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Resend API key:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

   Get your API key from [Resend](https://resend.com/) to enable the contact form functionality.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

This project follows a **feature-based architecture** inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react) for scalability and maintainability.

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with providers
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles and CSS variables
│   │   ├── Providers.tsx  # Theme and i18n providers
│   │   ├── contact/       # Contact page
│   │   └── projects/      # Projects pages
│   └── api/               # API routes
│       └── send-email/    # Contact form email handler
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   ├── about/            # About section components
│   ├── contact/          # Contact form components
│   ├── hero/             # Hero section components
│   ├── projects/         # Project showcase components
│   └── skills/           # Skills section components
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization configuration
├── layouts/              # Layout components
└── lib/                  # Utility libraries and configurations

messages/                 # Translation files
├── en.json              # English translations
└── he.json              # Hebrew translations

docs/                    # Documentation
public/                  # Static assets
├── portrait/            # Profile images
└── projects/            # Project screenshots
```

## 🌐 Internationalization

The portfolio supports both English and Hebrew languages with proper RTL (Right-to-Left) layout for Hebrew. Language switching is available in the header.

## 🎨 Theming

Built-in dark and light theme support using `next-themes` with system preference detection.

## 📧 Contact Form

The contact form uses Resend for email delivery. Make sure to:

1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Add it to your `.env.local` file
4. Update the sender email in `src/app/api/send-email/route.ts` if needed

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed on any platform that supports Node.js.

## 📜 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
