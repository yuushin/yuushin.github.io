# Deployment Guide

This guide covers multiple deployment options for the Alex Chen Portfolio website.

## Quick Start

1. **Prepare for deployment**:
   ```bash
   npm install
   npm run build
   ```

2. **Test production build locally**:
   ```bash
   npm run preview
   ```

## Deployment Options

### 1. Netlify (Recommended - Easiest)

**Via Git Integration:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

**Via Drag & Drop:**
1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to the deploy area
4. Your site will be live immediately

**Custom Domain:**
1. Go to Site settings > Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

### 2. Vercel (Great for React apps)

**Via Git Integration:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the build settings from `vercel.json`
5. Click "Deploy"

**Via CLI:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### 3. GitHub Pages

1. **Set up GitHub Actions** (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch

### 4. Traditional Web Hosting (cPanel, etc.)

1. **Build the project**:
   ```bash
   # Install dependencies first
   npm install
   
   # Run type checking
   npm run type-check
   
   # Build for production
   npm run build
   ```

2. **Upload files**:
   - Upload all contents of the `dist/` folder to your web server's public directory
   - Usually `public_html/`, `www/`, or `htdocs/`

3. **Configure server** (important for React routing):

   **For Apache (.htaccess file in root directory):**
   ```apache
   RewriteEngine On
   RewriteBase /
   
   # Handle client-side routing
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   
   # Security headers
   Header always set X-Frame-Options DENY
   Header always set X-Content-Type-Options nosniff
   Header always set X-XSS-Protection "1; mode=block"
   Header always set Referrer-Policy "strict-origin-when-cross-origin"
   
   # Cache static assets
   <filesMatch "\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2)$">
     ExpiresActive On
     ExpiresDefault "access plus 1 year"
   </filesMatch>
   ```

   **For Nginx (add to server block):**
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   
   # Security headers
   add_header X-Frame-Options DENY;
   add_header X-Content-Type-Options nosniff;
   add_header X-XSS-Protection "1; mode=block";
   add_header Referrer-Policy "strict-origin-when-cross-origin";
   
   # Cache static assets
   location /assets/ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

### 5. AWS S3 + CloudFront

1. **Create S3 bucket**:
   - Enable static website hosting
   - Upload `dist/` folder contents
   - Set bucket policy for public read access

2. **Set up CloudFront**:
   - Create distribution with S3 as origin
   - Set error pages: 403 and 404 both redirect to `/index.html`

3. **Route 53** (optional):
   - Configure custom domain with SSL certificate

### 6. Digital Ocean App Platform

1. **Create app**:
   - Connect your GitHub repository
   - Choose "Web Service"
   - DigitalOcean will auto-detect the build settings

2. **Configure**:
   - Build command: `npm run build`
   - Output directory: `dist`

## Environment Variables

If you need to add environment variables:

1. **For local development** (create `.env.local`):
   ```
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=your-analytics-id
   ```

2. **For production**: Add environment variables in your hosting platform's dashboard

## Custom Domain Setup

### SSL Certificate
Most modern hosting platforms provide free SSL certificates. If yours doesn't:
- Use Let's Encrypt for free SSL
- Configure your hosting to redirect HTTP to HTTPS

### DNS Configuration
Point your domain to your hosting platform:
- **Netlify**: Add CNAME record pointing to your Netlify subdomain
- **Vercel**: Add CNAME record pointing to `cname.vercel-dns.com`
- **Traditional hosting**: Add A record pointing to your server's IP

## Performance Optimization

### Pre-deployment Checklist
- [ ] Images optimized and properly sized
- [ ] Bundle size analyzed (`npm run build` shows bundle info)
- [ ] All console errors and warnings fixed
- [ ] SEO meta tags configured
- [ ] Accessibility tested
- [ ] Mobile responsiveness verified
- [ ] Performance tested with Lighthouse

### Post-deployment
- Set up monitoring (Google Analytics, etc.)
- Configure error tracking (Sentry, LogRocket, etc.)
- Set up uptime monitoring
- Test from different devices and networks

## Troubleshooting

### Common Issues

1. **404 errors on page refresh**:
   - Server not configured for SPA routing
   - Add redirect rules (see server configuration above)

2. **Fonts not loading**:
   - Check CORS settings
   - Verify font file paths

3. **Images not displaying**:
   - Check file paths are correct
   - Verify images are included in build

4. **Theme flashing**:
   - Already handled in our setup with inline script in `index.html`

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Test the production build locally first
4. Check your hosting platform's documentation
5. Contact your hosting provider's support

## Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Check performance with Google PageSpeed Insights
- Update content and portfolio projects regularly

### Backup
- Keep your source code in version control (Git)
- Backup any custom server configurations
- Document any custom deployment steps