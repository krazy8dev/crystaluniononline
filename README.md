# Crystal Union – Modern Banking Platform

A modern, technology-first bank built for you and your growing business. This project is a full-featured banking web application built with [Next.js](https://nextjs.org), featuring a modular architecture, robust authentication, a dynamic dashboard, and a beautiful, animated UI.

## Features

- **User Authentication:** Secure login and registration with email, password, and security pin.
- **Dashboard:** Account summary, transaction history, and personal details.
- **State Management:** Powered by Zustand for user, admin, and transaction state.
- **Reusable UI Components:** Built with Radix UI, Tailwind CSS, and custom components.
- **Animations:** Smooth, professional animations using Framer Motion ([see animation docs](docs/ANIMATIONS.md)).
- **API Integration:** Axios-based API layer for backend communication.
- **Accessibility & Responsiveness:** Mobile-friendly and accessible design.
- **Live Chat Integration:** Smartsupp live chat (configurable via environment variable).
- **Analytics:** Integrated with Vercel Analytics.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` – Next.js app directory (pages, layouts, styles)
- `components/` – Reusable UI and feature components
- `store/` – Zustand stores for state management
- `lib/` – Utility functions and shared logic
- `contexts/` – React context providers (e.g., translation)
- `public/` – Static assets (logo, images, icons)
- `api/` – API integration layer
- `docs/` – Project documentation (see [ANIMATIONS.md](docs/ANIMATIONS.md))

## Authentication

- **Login:** Email, password, and security pin required.
- **Registration:** Full name, email, password, confirm password, and security pin.
- **State:** Auth state managed via Zustand (`store/authstore.ts`).

## Dashboard

- **Account Summary:** View balance, account number, and transaction count.
- **Personal Details:** Manage user profile.
- **Transactions:** View and manage transaction history.

## Animations

- Built with Framer Motion.
- Pre-built animation variants and reusable components.
- See [docs/ANIMATIONS.md](docs/ANIMATIONS.md) for usage and examples.

## Environment Variables

Create a `.env.local` file and set:

```
NEXT_PUBLIC_SMARTSUPP_KEY=your_smartsupp_key
# Add other environment variables as needed
```

## Linting & Formatting

```bash
npm run lint
```

Formatting is handled by Prettier and Tailwind CSS plugin.

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## License

[MIT](LICENSE) (add a LICENSE file if needed)
