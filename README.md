This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone this repo or you can download the zip:

```bash
git clone https://github.com/dhruvspringtown/platformUI.git
```

Now you need to open the project in your terminal & install all the packages:

```bash
cd platformUI
npm install
```

Make sure you have node install in your system.
Now you need to create `.env.local` at root level of the project

Include this below variable in that file:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In order to share your local environment with your team or clients,
you need to install [ngrok](https://ngrok.com/download) in your system.

After Login or Register to ngrok, you will get `AuthToken` and then follow steps provided in the guide.

Once you unzip the folder you have to run `.exe` file. In the terminal run below command:

```bash
ngrok config add-authtoken <token>
```

```bash
ngrok http 3000
```

Update that `.env.local` variable to:

```bash
NEXT_PUBLIC_SITE_URL=<...>.ngrok-free.app
```

Copy that `<...>.ngrok-free.app` link and share the link with your teams or clients.

#### NOTE: Link will expire as soon as you terminate your local environment.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
