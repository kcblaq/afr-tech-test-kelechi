# TechLuma Contacts Manager

This project is a React-based application built with **Next.js**, showcasing a modern, stacked landing page, client-side CRUD functionality with an in-memory datastore, and comprehensive component styling using Tailwind CSS and Shadcn UI.

---

## 🛠️ Tools Used & Why

| Tool | Purpose & Justification |
|------|-------------------------|
| **Next.js (App Router)** | Used as the core React framework. Provides a great developer experience with file-system routing and seamless Server/Client component integration. |
| **Tailwind CSS v4** | A utility-first CSS framework for rapid, responsive UI development. Allows for inline styling without leaving the component context. |
| **Shadcn UI** | A collection of beautifully designed, accessible, and customizable React components. We used the **Luma** theme preset to give the app a modern, soft, and polished aesthetic. |
| **React Hook Form** | An extremely performant and flexible library for managing complex form states (like our Registration form) with minimal re-renders. |
| **Zod** | A TypeScript-first schema validation tool. Integrated directly with `react-hook-form` via `@hookform/resolvers` to strictly validate form inputs (e.g., minimum string lengths, valid emails) before any logic fires. |
| **React Context API** | Used to create `ContactContext`, an in-memory data store. This persists our registered contacts during the application's lifecycle (until a hard refresh) without needing to set up a heavy backend or external state library like Redux. |
| **Remix Icons (`@remixicon/react`)** | An open-source, crisp, and consistent icon library used throughout the application to enhance the UI. |
| **Vitest & React Testing Library** | A blazing fast testing framework native to Vite environments. Used alongside JSDOM and React Testing Library to execute unit tests against our Zod schema validation and our CRUD (Context API) logic. |
| **next-themes** | Used for managing dark and light mode themes seamlessly in the Next.js application, preventing hydration mismatches while syncing with user system preferences. |

---

## 🚀 Getting Started

Follow the steps below to install dependencies, run the application locally, build for production, and execute tests.

### 1. Installation
Navigate into the project directory (if not already there) and install the NPM packages:

```bash
cd afr-tech-test-kelechi
npm install
```

### 2. Running the Development Server
To start the app locally with hot-reloading:

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Building for Production
To create an optimized production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

### 4. Running Unit Tests
To execute the Vitest unit tests for the CRUD logic and Form Validation:

```bash
npm run test
```
To run tests in watch mode (reruns on file changes):
```bash
npm run test:watch
```

---

## 🧩 Challenges & Resolutions

During the development of this application, a few key challenges were encountered and successfully resolved:

1. **Coming up with a design concept without any initial design:** Without a wireframe or mockups provided, establishing a clean, modern, and user-friendly layout required creative thinking. This was resolved by researching modern web patterns online and iterating on different layouts, ultimately leveraging Shadcn UI components to build a cohesive and premium interface.
2. **Creating a custom theme beyond the default Maia theme:** Building and integrating a custom theme required deep knowledge of Tailwind CSS and Shadcn's theming system. I successfully searched out solutions online to properly implement and apply custom CSS variables and color palettes, achieving the desired aesthetic while maintaining component consistency.

---

## 🎨 Theme Backups & Switching

The original `Maia` theme files have been backed up in the `afr-tech-test-kelechi` folder:
- `src/app/globals.maia.css`
- `components.maia.json`

To switch back to the original Maia theme, run the following commands from the `afr-tech-test-kelechi` directory:
```bash
cp src/app/globals.maia.css src/app/globals.css
cp components.maia.json components.json
```

To switch back to the custom `Luma` theme, simply re-apply it using `npx shadcn@latest apply luma` or maintain backups of the Luma files as well.
