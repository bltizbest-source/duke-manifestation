# The Duke's Premium Redesign

Deployment-ready Next.js project configured for:
- GitHub source control + CI
- Dokploy production deployment

## Local Run

```bash
npm ci
npm run dev
```

## GitHub Setup

This folder is not a git repository yet. Initialize and push with:

```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/<your-org-or-user>/<your-repo>.git
git push -u origin main
```

## CI (GitHub Actions)

Workflow file: `.github/workflows/ci.yml`

On every push to `main` and every PR, CI will:
1. Install dependencies
2. Build the Next.js app

## Docker Production Build

This repo includes:
- `Dockerfile` (multi-stage, Next.js standalone output)
- `docker-compose.yml` (production container config)
- `.dockerignore`

Test locally:

```bash
docker build -t dukes-web:latest .
docker run --rm -p 3000:3000 dukes-web:latest
```

## Dokploy Setup

### Option A: Deploy from Dockerfile (recommended)
1. In Dokploy, create a new **Application** from your GitHub repo.
2. Build type: **Dockerfile**.
3. Dockerfile path: `Dockerfile`.
4. Set app port to `3000`.
5. Add your domain in Dokploy and enable SSL.
6. Deploy.

### Option B: Deploy from Compose
1. In Dokploy, create a new **Compose** app from this repo.
2. Compose path: `docker-compose.yml`.
3. Map service `web` and expose port `3000`.
4. Add domain and deploy.

## Auto Deploy from GitHub to Dokploy

Workflow file: `.github/workflows/dokploy-deploy.yml`

1. In Dokploy, copy your deployment webhook URL.
2. In GitHub repo settings, add secret:
   - `DOKPLOY_DEPLOY_HOOK_URL`
3. Push to `main` (or run the workflow manually) to trigger deploy.

