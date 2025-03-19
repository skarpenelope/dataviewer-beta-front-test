# Dataviewer Beta

![Next.js Version](https://img.shields.io/badge/next.js-15.2.1-blue)
![React Version](https://img.shields.io/badge/react-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-2.3.0-blue)

<div align="center">
  <img src="public/dataviewer_full.svg" alt="Dataviewer Full Logo" />
</div>

---

A modern application for visualizing student information, built with Next.js 15 and React 19. Dataviewer Beta leverages data from the LoP platform to provide an intuitive and efficient interface for exploring and analyzing student-related data. With Turbopack for ultra-fast development and Tailwind CSS for seamless styling, this project ensures a smooth and responsive user experience.

## ✨ Features

- 🖥 shadcn/ui Component Library - Accessible, customizable components built with Radix UI primitives
- ⚡ Next.js 15 with Turbopack for blazing fast development
- 🎨 Tailwind CSS with animations and merge utilities
- 🔍 Strict ESLint + Prettier code quality setup
- 🐶 Husky Git hooks with commit message validation
- 🛠 TypeScript-first development

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm 9.x+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Natalnet/dataviewer-beta-frontend.git
cd dataviewer-beta-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up Git hooks (automatically configured after install):

```bash
npm run prepare
```

## 📋 Available Scripts

In the project directory, you can run:

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Check for ESLint errors
- `npm run prepare`: Set up Git hooks (auto-runs after install)

## 🔧 Code Quality

This project uses:

- ESLint with Next.js core rules + Prettier integration
- Pre-commit hooks with `lint-staged`
- Conventional commit message validation via `commitlint`
- TypeScript strict type checking

Git hooks will automatically:

- Format code with Prettier
- Run ESLint checks
- Validate commit messages

## 🖌 UI Components Architecture

This project uses [shadcn/ui](https://ui.shadcn.com/) components with the following stack:

- **Radix UI Primitives** - Unstyled, accessible component primitives
- **Tailwind CSS** - Utility-first styling with `tailwind-merge` for class combination
- **CLSX** - Conditional class handling
- **CVA (Class Variance Authority)** - Type-safe component variants
- **Slot** - Radix Slot utility for component composition

## 🧩 Working with Components

### Component Structure

Components follow shadcn/ui conventions:

```bash
src/
  components/
    ui/
      button.tsx  # Component logic and style variants (using cva with Tailwind classes)
```

### Creating New Components

1. Use the shadcn CLI (if configured):

```bash
npx shadcn-ui@latest add button
```

2. Manual creation example:

```typescript
// components/custom-card.tsx
import { cva } from 'class-variance-authority'

const cardVariants = cva('rounded-lg border bg-card text-card-foreground', {
  variants: {
    variant: {
      default: 'shadow-sm',
      elevated: 'shadow-lg'
    }
  }
})
```

## 🤝 Contributing

1. Create your feature branch:

```bash
git checkout -b feature/your-feature
```

2. Commit your changes (follow conventional commit format):

```bash
git commit -m "feat: add new data visualization component"
```

3. Push to the branch:

```bash
git push origin feature/your-feature
```

4. Open a Pull Request

---

Built with the [shadcn/ui](https://ui.shadcn.com/) design system. Documentation for components can be found in their respective files under `src/components/ui`.
