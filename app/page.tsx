/* eslint-disable @next/next/no-img-element */
import {
  RocketIcon,
  CodeIcon,
  GitBranchIcon,
  LayoutDashboardIcon
} from 'lucide-react'

import ClientDate from '@/components/client-date'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="flex flex-col items-center gap-4 text-center w-full">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
          Dataviewer Beta
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A modern application for visualizing student information, built with
          Next.js 15 and React 19. Leverage data from the LoP platform to
          explore and analyze student-related data intuitively.
        </p>
        {/* Badge Section */}
        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/next.js-15.2.1-blue"
            alt="Next.js 15.2.1"
            width={100}
            height={24}
            className="h-6"
          />
          <img
            src="https://img.shields.io/badge/react-19.0.0-blue.svg"
            alt="React 19.0.0"
            width={100}
            height={24}
            className="h-6"
          />
          <img
            src="https://img.shields.io/badge/shadcn/ui-2.3.0-blue"
            alt="shadcn/ui 2.3.0"
            width={100}
            height={24}
            className="h-6"
          />
          <img
            src="https://img.shields.io/badge/shadcn/ui-2.3.0-blue"
            alt="shadcn/ui 2.3.0"
            width={100}
            height={24}
            className="h-6"
          />
        </div>
      </header>

      {/* Feature Grid */}
      <main className="flex flex-col gap-8 items-center w-full max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="flex flex-col gap-2 p-6 bg-card rounded-lg border">
            <LayoutDashboardIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">shadcn/ui</h3>
            <p className="text-sm text-muted-foreground">
              Accessible, customizable components built on Radix UI primitives.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-card rounded-lg border">
            <RocketIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Next.js 15 & Turbopack</h3>
            <p className="text-sm text-muted-foreground">
              Blazing-fast development with instant server startup.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-card rounded-lg border">
            <GitBranchIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Code Quality</h3>
            <p className="text-sm text-muted-foreground">
              Pre-configured ESLint, Prettier, Husky, and commitlint for
              high-quality code.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-card rounded-lg border">
            <CodeIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">TypeScript-first</h3>
            <p className="text-sm text-muted-foreground">
              Full type safety to ensure robust development.
            </p>
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-5 w-full sm:w-auto"
            href="https://ui.shadcn.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui Documentation
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-5 w-full sm:w-auto"
            href="https://github.com/Natalnet/dataviewer-beta-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranchIcon className="h-5 w-5 mr-2" />
            GitHub Repository
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-muted-foreground">
        &copy; <ClientDate /> Natalnet. All rights reserved.
      </footer>
    </div>
  )
}
