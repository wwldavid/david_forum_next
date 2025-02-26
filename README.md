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

-- Github OAuth login

14. Register OAuth App in GitHub's dashboard
    Go to the GitHub developer settings, also found under Settings → Developers → OAuth Apps, and click “New OAuth App”

-- Record OAuth authentication information to database

15. pnpm add @prisma/client @auth/prisma-adapter
16. pnpm add prisma --save-dev
17. pnpm approve-builds
18. npx prisma init --datasource-provider sqlite
    update schema.prisma (prisma/schema-sqlite.prisma)(https://authjs.dev/getting-started/adapters/prismanpx)
19. npx prisma db push (created SQLite database dev.db)
20. npx prisma generate (Generated Prisma Client)

-- zod check topic

21. pnpm i zod
