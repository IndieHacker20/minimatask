1. Transfer repo to aydinj13
2. Clone on device
3. Run `npm i`
4. Run `npx convex dev`
5. Sign into clerk, convex (and transfer project to aydin account)
6. .env.local:
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2F2aW5nLWJ1bGxmcm9nLTc1LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_PBD0vEsTFLK3I3TmfRMcZbPJeWCNrrwodyFCf0ACyn

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:zany-fox-525 # team: indiehacker20, project: minimatask

NEXT_PUBLIC_CONVEX_URL=https://zany-fox-525.convex.cloud

7. Use GH Copilot or Cursor or Claude for quick vibe coding
