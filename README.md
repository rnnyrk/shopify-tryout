# Shopify + NextJS 13 app dir

Boilerplate for setting up a headless Shopify with NextJS.

- React 18 with Suspense and React Server Components
- Next.js 13 app directory
- Framer Motion for animations
- Tailwind CSS with `clsx` and `tailwind-merge` for dynamic classes
- TypeScript (no-brainer)
- PNPM package manager
- ESLint and Prettier
- Shopify Storefront API
- GraphQL

## TODO

- [ ] Create responsive Cart layout (currently only desktop)
- [ ] Use `generateMetadata` in [`/[locale]/products/[slug]/layout.tsx`](https://github.com/rnnyrk/mellow-tallow/blob/main/src/app/%5Blocale%5D/products/%5Bslug%5D/layout.tsx)
- [ ] Add seach functionality
- [ ] Get products in different currencies based on language
- [ ] Fetch a Checkout url with the correct language and currency
- [ ] Instead of using a local cart state, use the Shopify Checkout API. [See also my created issue: mentioned issue isn't there anymore because of different GraphQL API as before](https://community.shopify.com/c/shopify-apis-and-sdks/storefront-createcart-returned-id-is-invalid-global-id-for/m-p/2086971#M91354%3Futm_source=communitymembers&utm_medium=email&utm_campaign=mention)
