-- install and connect with github

1. npx create-next-app@latest
2. update .gitignore
3. git init
4. git remote add origin https://github.com/wwldavid/david_forum_next.git
   ...

-- nextui

5. pnpm add @heroui/react framer-motion
6. touch .npmrc
   add this line in .npmrc file: public-hoist-pattern[]=_@heroui/_
7. pnpm install
8. pnpm approve-builds

-- auth

9. pnpm install next-auth@beta
10. npx auth secret
11. create auth.ts file under src
12. Add a Route Handler under /app/api/auth/[...nextauth]/route.ts
13. create middleware.ts under src
14.
