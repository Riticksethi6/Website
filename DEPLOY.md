# Deploying to GitHub Pages

## One-time setup

### 1. Create a GitHub repository
Go to https://github.com/new and create a new **public** repository named `Website` under the `Riticksethi6` account.

### 2. Push the project
```bash
cd /Users/riticksethi/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Riticksethi6/Website.git
git push -u origin main
```

### 3. Deploy
`gh-pages` is already installed as a dev dependency and the scripts are wired up in `package.json`.
```bash
npm run deploy
```
This builds the project and pushes the `dist/` folder to the `gh-pages` branch automatically.

### 4. Enable GitHub Pages in repo settings
- Go to your repo on GitHub → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`
- Save

Your site will be live at:
`https://riticksethi6.github.io/Website/`

---

## Re-deploying after changes
```bash
npm run deploy
```
Changes go live in ~60 seconds.

---

## Local development
```bash
npm run dev
```
Opens at http://localhost:5173

## Preview production build locally
```bash
npm run build && npm run preview
```
Opens at http://localhost:4173

---

## Custom domain (optional)
1. Buy a domain (e.g. via Namecheap, Cloudflare)
2. Add a `CNAME` file inside the `public/` folder with your domain:
   ```
   riticksethi.dev
   ```
3. In GitHub Pages settings, enter your custom domain
4. Add DNS records at your registrar:
   - Type A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or a CNAME record: `www` → `riticksethi6.github.io`
