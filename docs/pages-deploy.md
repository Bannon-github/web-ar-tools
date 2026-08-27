# GitHub Pages Deployment

This repository deploys `apps/studio-web` to GitHub Pages using GitHub Actions.

## Workflow

- File: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` and manual dispatch
- Artifact path: `apps/studio-web/dist`

## Enable Pages in repository settings

1. Open **Settings → Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Save

## AR capability behavior

The deployed page checks:
- `window.isSecureContext`
- `navigator.xr` availability
- `immersive-ar` support via `isSessionSupported`

If unsupported, it automatically stays in fallback mode.
