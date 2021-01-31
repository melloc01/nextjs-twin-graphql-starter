# This is a starter for new [Next.js](nextjs.org/) projects, easily deployable to [vercel](vercel.com/), with GraphQL (with codegen!!) and tailwind (twin.macro) and friends working out of the box.

### Note that besides Next.js and twin.macro, all other libraries are easily replaced or taken off.

# What is included
- ### [Next.js@^10](nextjs.org/)
- ### [twin.macro](https://github.com/ben-rogerson/twin.macro/)
- ### [GraphQL (Apollo server)](https://www.apollographql.com/docs/apollo-server/v1/servers/micro/)
- ### [react-query](react-query.tanstack.com/)
- ### [react-hook-form](https://react-hook-form.com/)

- ### [antd](ant.design/)

- ### [Cloud MongoDB integration](https://cloud.mongodb.com)

# VS Code integration
It is important to have some extensions so your intellisense works properly. There are configuration files on the project that makes them work properly.

- GraphQL (from GraphQL Foundation)
- Tailwind CSS Intellisense (from Brad Cornes)
- twin.macro Auto Complete (from Dannis Vash)
- optional: Tailwind Docs (Austen Cameron)

# Getting started

- Create file `.env.local` based on `.env.example`
- Customize meta tags at: lib/constants.ts@META_TAGS
- Customize your schema.graphql




Project structure:

```
├── codegen.yml -- codegen config (https://graphql-code-generator.com/)
├── components
│   ├── AppHead.tsx -- <head /> tag
│   ├── AppWrappers.js
│   ├── GlobalStyles.js -- global styles
│   ├── Header.js -- App Header component
│   └── styled.js -- Some styled components
├── graphql.config.js --  config,
├── lib
│   ├── api
│   │   └── handlers.ts -- common handlers
│   ├── constants.ts -- app constants
│   ├── db
│   │   ├── db.ts -- db wrappers
│   │   └── MenuRepository.ts -- repository
│   ├── graphql
│   │   ├── documents
│   │   │   ├── mutations.graphql
│   │   │   └── query.graphql
│   │   ├── graphqlClient.ts
│   │   ├── resolvers
│   │   │   └── resolvers.ts
│   │   ├── schema.graphql
│   │   └── useGraphqlSub.ts
│   ├── graphql-generated.ts
│   ├── hooks
│   │   └── data-hooks.ts
│   ├── queryClient.ts
│   ├── session.js -- session utils
│   └── socket.js -- websocket utils
├── next.config.js
├── next-env.d.ts
├── package.json
├── pages
│   ├── admin
│   │   └── index.js
│   ├── api
│   │   ├── graphql.ts
│   │   ├── login.js
│   │   └── logout.ts
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── login.js
│   └── logout.js
├── public
│   └── favicon.ico
├── README.md
├── __server__socket-io-trial.js
├── tailwind.config.js
├── TODO.md
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
