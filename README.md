# `README.md`

```md
# Steven Berrisford Portfolio Site

A one-page portfolio website built with **React**, **TypeScript**, and **Vite**.

The site is designed around a CV structure and displays sections such as:

- Summary
- Experience
- Education
- Skills
- Projects
- Certifications
- Courses
- Languages
- Interests
- Contact

Each experience, project, education, course, and skill item can be displayed as a card with:

- background image
- white text panel at the bottom
- optional redirect URL
- dynamically loaded content

The app supports:

- **default built-in CV content**
- **optional dynamic overrides** from `public/portfolio-data.json`
- **sticky top navigation** to jump to sections
- **Docker deployment** for VPS/container hosting
- **static build output** for normal web hosting

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Docker + Nginx for deployment (optional)

---

## Prerequisites

### Local development
Make sure you have:

- **Node.js** `20.19+` or `22.12+`
- **npm**

Check installed versions:

```bash
node -v
npm -v
```

### Docker deployment
If deploying in a container, make sure you also have:

- Docker
- Docker Compose (or `docker compose` plugin)
- A host Nginx reverse proxy on your VPS if using subdomain routing

---

## Install Dependencies

From the project root:

```bash
npm install
```

---

## Run the App Locally

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```txt
http://localhost:5173
```

Open that in your browser.

---

## Build for Production

Create an optimized production build:

```bash
npm run build
```

This outputs the final site into:

```txt
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Scripts

The project uses these scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

---

## Project Structure

```txt
portfolio-site/
├── public/
│   └── portfolio-data.json
├── src/
│   ├── components/
│   │   ├── CardGrid.tsx
│   │   ├── ImageCard.tsx
│   │   ├── InfoTile.tsx
│   │   ├── ProfileHero.tsx
│   │   ├── Section.tsx
│   │   └── TopNav.tsx
│   ├── data/
│   │   └── defaultPortfolio.ts
│   ├── hooks/
│   │   └── usePortfolioData.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Content Loading

The app loads portfolio content in this order:

1. Built-in default data from:

```txt
src/data/defaultPortfolio.ts
```

2. Optional JSON overrides from:

```txt
public/portfolio-data.json
```

If `portfolio-data.json` is empty or missing fields, the app falls back to the default CV data.

### Important behavior
- **Objects** are merged with the defaults
- **Arrays** replace the defaults entirely

So if you override `projects`, provide the full `projects` array you want displayed.

---

## Dynamic Content Format

Cards support this structure:

- `imageUrl`
- `redirectUrl`
- `title`
- `text`

Example `public/portfolio-data.json`:

```json
{
  "projects": [
    {
      "id": "movie-predictor",
      "title": "Movie Predictor",
      "text": "Developed a Flask web and ETL profit prediction application.",
      "imageUrl": "https://example.com/images/movie-predictor.jpg",
      "redirectUrl": "https://github.com/StevenB96"
    }
  ]
}
```

Images can be:

- `.png`
- `.jpg`
- `.jpeg`
- remote image URLs

---

## Static Deployment Option

If you want to deploy without Docker:

1. Build the app:

```bash
npm run build
```

2. Copy the contents of `dist/` to your web server directory, for example:

```txt
/var/www/portfolio-site
```

3. Configure Nginx to serve the static files.

Example Nginx config:

```nginx
server {
    listen 80;
    server_name portfolio.example.com;

    root /var/www/portfolio-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Then test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Docker Deployment Option

This project can also be deployed in Docker and proxied by your VPS Nginx server.

### Example Dockerfile

```dockerfile
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Example container `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build the Docker image

```bash
docker build -t portfolio-site .
```

### Run the container

```bash
docker run -d --name portfolio-site -p 8085:80 portfolio-site
```

The site will then be available internally on:

```txt
http://127.0.0.1:8085
```

---

## Docker Compose Example

If you prefer Compose:

```yaml
services:
  portfolio-site:
    build: .
    container_name: portfolio-site
    restart: unless-stopped
    ports:
      - "8085:80"
```

Start it with:

```bash
docker compose up -d --build
```

---

## VPS Nginx Reverse Proxy Example

If you already have a host Nginx server routing traffic to containers, proxy the portfolio subdomain to the container port.

Example:

```nginx
server {
    listen 80;
    server_name portfolio.example.com;

    location / {
        proxy_pass http://127.0.0.1:8085;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

If SSL is handled at the host level, keep HTTPS there and proxy internally to the container over HTTP.

After updating Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Typical Deployment Workflow

### Local build + git push
```bash
git add .
git commit -m "Update portfolio site"
git push
```

### On the VPS
```bash
cd /path/to/portfolio-site
git pull
docker compose up -d --build
```

Then reload host Nginx if needed:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Troubleshooting

### TypeScript cannot find `./styles.css`
Make sure both files exist:

```txt
src/styles.css
src/vite-env.d.ts
```

Contents of `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

---

### Build fails with engine or Node version issues
Vite may require a newer Node version.

Use:

- Node `20.19+`
- or Node `22.12+`

---

### Dynamic JSON changes are not showing
Make sure:

- `public/portfolio-data.json` is valid JSON
- your browser is not caching old data
- the app is fetching from `/portfolio-data.json`

---

## Notes

- The app is a **single-page portfolio**
- Navigation links jump to sections using anchor links
- Cards become clickable if `redirectUrl` is provided
- Default content is always available if external JSON is missing

---

## Author

Steven Berrisford

- LinkedIn: https://linkedin.com/in/stevenberrisford55061a134
- GitHub: https://github.com/StevenB96
- Email: stevenberrisford@gmail.com
```

---

# `.gitignore`

```gitignore
# dependencies
node_modules/

# production build output
dist/

# local environment files
.env
.env.*
!.env.example

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# editor / IDE
.vscode/
.idea/
*.swp
*.swo
*.sln
*.user
*.tmp

# OS files
.DS_Store
Thumbs.db

# TypeScript
*.tsbuildinfo

# coverage / testing
coverage/

# optional cache directories
.cache/
.temp/
tmp/

# Docker override files if used locally
docker-compose.override.yml
```

---

## Optional note about `portfolio-data.json`
If you want your dynamic content file versioned in Git, **do not** add `public/portfolio-data.json` to `.gitignore`.

If instead you want to manage it only on the server, you could add:

```gitignore
public/portfolio-data.json
```

But for most portfolio projects, I’d keep it tracked.

---

If you want, I can also give you:

1. a **matching `Dockerfile`**
2. a **matching `nginx.conf`**
3. a **`docker-compose.yml`**
4. a **shorter professional README version for GitHub**