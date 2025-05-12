# Project Summary: CourseFlow

This document provides a summary of the "CourseFlow" web application, designed to help another developer recreate the project.

## 1. Project Overview

**CourseFlow** is a modern web application built with Next.js for browsing and discovering online courses. It features a clean, aesthetically pleasing user interface with interactive elements and animations.

**Key Features:**

- **Homepage:** A visually engaging landing page with a hero section, featured course spotlights, reasons to choose the platform, and a simple "how it works" guide.
- **Courses Page:** An interactive catalog displaying all available courses. Users can search, filter by category, and sort courses based on rating, title, or student enrollment.
- **About Us Page:** Provides information about the mission, vision, values, and team behind CourseFlow.
- **Course Details:** A modal dialog that displays detailed information about a selected course, including description, instructor, duration, rating, tags, price, and potentially a trailer.
- **Responsive Design:** The application is designed to work well on various screen sizes.
- **Scroll Animations:** Subtle animations are applied to sections as they scroll into view, enhancing the user experience.
- **AI Placeholder:** Includes a Genkit-based flow for generating course recommendations based on viewing history (currently uses mock data).

## 2. Technologies Used

- **Framework:** Next.js (v15+ with App Router)
- **Language:** TypeScript
- **UI Library:** React (v18+)
- **Styling:** Tailwind CSS with CSS Variables for theming (light/dark mode support defined in `src/app/globals.css`).
- **UI Components:** ShadCN UI (using Radix UI primitives)
- **Icons:** Lucide React
- **AI (Optional/Placeholder):** Genkit (v1.x) with Google AI provider (for `course-recommendations` flow).
- **Fonts:** Geist Sans
- **Linting/Formatting:** Standard Next.js setup (ESLint, Prettier likely configured).
- **Package Manager:** npm

## 3. Project Structure

```
courseflow/
├── .env                    # Environment variables (currently empty)
├── .vscode/                # VS Code settings
├── components.json         # ShadCN UI configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project README
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets (e.g., images, fonts if needed)
└── src/
    ├── ai/                 # Genkit AI configuration and flows
    │   ├── dev.ts          # Genkit development server entry point
    │   ├── flows/
    │   │   └── course-recommendations.ts # AI flow for recommendations
    │   └── genkit.ts       # Genkit initialization
    ├── app/                # Next.js App Router pages and layouts
    │   ├── (pages)/        # Route group for main pages
    │   │   ├── about/
    │   │   │   └── page.tsx # About Us page
    │   │   ├── courses/
    │   │   │   └── page.tsx # Course Catalog page
    │   │   └── page.tsx    # Homepage
    │   ├── globals.css     # Global styles and Tailwind directives
    │   └── layout.tsx      # Root layout
    ├── components/         # Reusable React components
    │   ├── course/         # Course-specific components
    │   │   ├── CourseCard.tsx
    │   │   ├── CourseCatalog.tsx
    │   │   ├── CourseDetailModal.tsx
    │   │   └── FeaturedCourses.tsx
    │   ├── layout/         # Layout components (Header, Footer, Hero)
    │   │   ├── Footer.tsx
    │   │   ├── Header.tsx
    │   │   └── HeroSection.tsx
    │   └── ui/             # ShadCN UI components (Button, Card, Dialog, etc.)
    ├── hooks/              # Custom React Hooks
    │   ├── use-mobile.tsx
    │   ├── use-toast.ts
    │   └── useScrollAnimation.ts
    ├── lib/                # Utility functions and libraries
    │   ├── mock-data.ts    # Mock course data and functions
    │   └── utils.ts        # General utility functions (e.g., cn for classnames)
    └── types/              # TypeScript type definitions
        └── course.ts       # Course data type definition
```

## 4. Getting Started

1.  **Clone/Copy Files:** Recreate the file structure and copy the content of each file provided in the previous steps.
2.  **Install Dependencies:** Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```
3.  **Environment Variables:** Create a `.env` file in the project root. While currently empty, it might be needed for API keys (like Google AI for Genkit) if those features are fully implemented.
4.  **Run Development Server:** Start the Next.js development server:
    ```bash
    npm run dev
    ```
    The application should be accessible at `http://localhost:3000` (or the port specified in `package.json`).
5.  **(Optional) Run Genkit Dev Server:** If you intend to work with the AI features, run the Genkit development server in a separate terminal:
    ```bash
    npm run genkit:dev
    ```

## 5. Key Implementation Details

- **Routing:** Uses the Next.js App Router convention with pages located in `src/app`.
- **Styling:** Relies heavily on Tailwind CSS utility classes. Custom theme colors (HSL variables) are defined in `src/app/globals.css` for both light and dark modes.
- **Components:** Leverages ShadCN UI for pre-built, accessible components. Custom components are built for specific features like `CourseCard` and `CourseCatalog`.
- **Data:** Course information is currently mocked in `src/lib/mock-data.ts`. This would typically be replaced by API calls to a backend service or database.
- **State Management:** Uses React's `useState` for local component state (e.g., managing modal visibility, search terms, filters).
- **Animations:** The `useScrollAnimation` hook (`src/hooks/useScrollAnimation.ts`) combined with CSS keyframes (`@/app/globals.css`) and utility classes (`animate-fade-in-up`, `scroll-animate`, `scroll-animate-visible`) provides fade-in-up effects on scroll.
- **Image Placeholders:** Uses `https://picsum.photos` for placeholder images in course cards and other sections. `data-ai-hint` attributes are added to images to suggest relevant keywords for finding real images later.

This summary should provide a solid foundation for understanding and recreating the CourseFlow project. Remember to replace mock data and placeholder images/content as needed for a production application.
