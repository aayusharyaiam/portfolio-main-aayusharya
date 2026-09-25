# Aayush Arya Portfolio

Personal portfolio for Aayush Arya, a full-stack web developer. The site presents selected projects, technical skills, experience, certifications, social profiles, and contact details through a responsive single-page experience.

**Live site:** [portfolio-main-aayusharya.vercel.app](https://portfolio-main-aayusharya.vercel.app/)

## Highlights

- Hand-drawn paper-and-pencil visual style with custom Tailwind utilities.
- Animated hero, section reveals, parallax elements, hover states, and SVG path animations with Framer Motion.
- Responsive sections for Home, About, Projects, Skills, Experience, Highlights, and Contact.
- Featured work including Technika'26, Prakrida'26, IEEE Student Branch, Bharti AI, IMPACT'25, and Lifeer.
- Resume viewer with an animated receipt-style modal and the bundled PDF at `src/assets/AayushArya_Resume.pdf`.
- Contact form submitted through FormSubmit; no application backend is required.
- External links to GitHub, LinkedIn, LeetCode, live projects, and public source repositories.

## Tech Stack

- React 18 with TypeScript
- Vite 5
- Tailwind CSS 3 and PostCSS
- Framer Motion
- React Router
- TanStack Query
- Radix UI primitives and shadcn-style components
- Lucide React icons
- ESLint and TypeScript for code quality

## Getting Started

### Requirements

- Node.js 18 or newer
- npm, or Bun when using the included `bun.lockb` file

### Installation

```bash
git clone https://github.com/aayusharyaiam/portfolio-main-aayusharya.git
cd portfolio-main-aayusharya
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Other scripts

```bash
npm run build       # Production build
npm run build:dev   # Development-mode build
npm run preview     # Preview the production build locally
npm run lint        # Run ESLint
```

## Project Structure

```text
src/
  components/       Page sections and reusable UI components
  components/ui/    Radix-based interface primitives
  pages/            Routed page components
  assets/           Resume and other local assets
  App.tsx           Providers and application routes
  index.css         Global styles and Tailwind layers
```

The application currently exposes the portfolio at `/` and a fallback `NotFound` page for unknown routes.

## Contact Form

The form in `src/components/Contact.tsx` posts directly to FormSubmit using the configured portfolio email address. When changing the recipient, update the form action and verify the new address with FormSubmit before deploying.

## Links

- [GitHub](https://github.com/aayusharyaiam)
- [LinkedIn](https://www.linkedin.com/in/aayusharyaiam/)
- [LeetCode](https://leetcode.com/u/aayusharya_i_am/)
