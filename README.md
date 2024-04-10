## This app has the following features:

- When first starting a session, the user will be prompted for a username and job title
- Once entered, these will persist between reloads (stored in session storage)
- The user can later edit these details from the home page
- The information page will display a paginated list of anime titles fetched from an external graphql api
- Pagination works via buttons or browser url.
- Clicking on one of the titles will show additional information

## Some NextJs features used in this solution are:

- Pre-fetching data at server-side on request
- Image optimisation
- Automatic routing via pages router

## Some limitations of this version:

- No error handling for the external api
- Limited responsiveness
- Limited styling

## Getting Started

First, run the development server:

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
