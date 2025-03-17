# Getting Started

Follow these steps to set up the project locally on your machine.

**Requirements**

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (recommended version: v20)
- [pnpm](https://pnpm.io/) (recommended to install via Corepack)

**Setting up the Repository**

```bash
npx create-next-app -e https://github.com/techwithanirudh/shadcn-portfolio --use-pnpm
cd shadcn-portfolio
```

**Configuring the Project**

1. (Optional) If you want to use the contact form functionality:

   - Create a new [Resend](https://resend.com/) account.
   - Follow the steps to set up your API key and configuration for the contact form. You’ll need to input the relevant environment variables in the `.env` file.

   ```bash
   cp -r .env.example .env
   ```

   - Fill in the required variables in the `.env` file with the values from your Resend account.

   If you do not wish to use the contact form, you can comment out the contact form code in the `contact.tsx` file located in the `@/components/sections/contact` directory.

2. Update the configuration files for each section. The paths to these files, relative to the project root, are as follows:

- `@/app/config`
- `@/components/sections/header/config`
- `@/components/sections/hero/config`
- `@/components/sections/experience/config`
- `@/components/sections/projects/config`
- `@/components/sections/skills/config`
- `@/components/sections/testimonials/config`
- `@/components/sections/contact/config`
- `@/components/sections/footer/config`

After updating the template with your data, you can run the app.

**Running the Project**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
