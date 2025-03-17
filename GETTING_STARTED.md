# Getting Started

Follow these steps to set up the project locally on your machine.

**Requirements**

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (recommended version: v20)
- [pnpm](https://pnpm.io/) (recommended to install via Corepack)

**Setting up the Repository**
Note: Use pnpm for setup

```bash
npx create-turbo@latest -e https://github.com/techwithanirudh/shadcn-portfolio.git
cd shadcn-portfolio
```

**Project Structure**

This is a Turborepo monorepo with the following structure:

```
.
├── apps/
│   └── web/               # Main Next.js application
├── packages/
│   ├── env/              # Environment and feature flags configuration
│   └── ui/               # Shared UI components
└── tooling/              # Development tools and configurations
```

**Configuring the Project**

1. Copy the example environment file:

   ```bash
   cp -r .env.example .env
   ```

2. Configure Feature Flags in your `.env` file:

   ```env
   # Feature Flags
   NEXT_PUBLIC_FLAG_AUTH=false      # Enable/disable authentication
   NEXT_PUBLIC_FLAG_COMMENTS=false  # Enable/disable comment system
   NEXT_PUBLIC_FLAG_CONTACT=false   # Enable/disable contact form
   NEXT_PUBLIC_FLAG_TURNSTILE=false # Enable/disable Cloudflare Turnstile
   ```

3. Optional Features Setup:

   **Authentication (if NEXT_PUBLIC_FLAG_AUTH=true)**

   - Configure your preferred authentication provider (GitHub, Google, etc.)
   - Add the required OAuth credentials to your `.env` file

   **Contact Form (if NEXT_PUBLIC_FLAG_CONTACT=true)**

   - Create a [Resend](https://resend.com/) account
   - Add your Resend API key to the `.env` file:
     ```env
     RESEND_API_KEY=your_api_key_here
     ```

   **Cloudflare Turnstile (if NEXT_PUBLIC_FLAG_TURNSTILE=true)**

   - Create a [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) account
   - Add your site and secret keys to the `.env` file:
     ```env
     NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
     TURNSTILE_SECRET_KEY=your_secret_key
     ```

   **Comments System (if NEXT_PUBLIC_FLAG_COMMENTS=true)**

   - The comments system will be automatically enabled if authentication is enabled
   - Comments are stored in your database using Drizzle ORM

4. Update the configuration files for each section in the web app. The paths to these files, relative to the apps/web directory, are as follows:

- `@/app/config`
- `@/components/sections/header/config`
- `@/components/sections/hero/config`
- `@/components/sections/experience/config`
- `@/components/sections/projects/config`
- `@/components/sections/skills/config`
- `@/components/sections/testimonials/config`
- `@/components/sections/contact/config`
- `@/components/sections/footer/config`

**Development Workflow**

```bash
# Install dependencies
pnpm install

# Run database migrations (if using auth or comments)
pnpm db:push

# Start the development server
pnpm dev
```

This will start the development server for all packages and applications. The main web app will be available at [http://localhost:3000](http://localhost:3000).

**Using Feature Flags**

The project uses a type-safe feature flags system. To use feature flags in your code:

```typescript
import { env, flags } from '@shadcn-portfolio/env'

// Example: Conditionally render auth UI
{flags.auth && <AuthButton />}

// Example: Initialize services based on flags
export const resend = flags.contact ? new Resend(env.RESEND_API_KEY) : null
```

**Additional Configuration**

1. **Custom Styling**

   - The project uses Tailwind CSS for styling
   - You can customize the theme in `apps/web/tailwind.config.js`
   - Global styles are in `apps/web/styles/globals.css`

2. **SEO**

   - Update the metadata in `apps/web/app/layout.tsx`
   - Customize OG images in `apps/web/app/api/og/route.tsx`

3. **Content**

   - Blog posts are stored in `apps/web/content/blog`
   - Projects are configured in `apps/web/content/projects`
   - Update the MDX content following the existing format

4. **Performance Monitoring**
   - Sentry integration is available (optional)
   - Configure Sentry in `apps/web/sentry.client.config.ts` and `apps/web/sentry.server.config.ts`

**Deployment**

The project can be deployed to any platform that supports Next.js applications. We recommend:

- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

Make sure to set up all the required environment variables on your deployment platform.
