# Ian Betts Portfolio

A modern, responsive portfolio website showcasing UI/UX design work with protected project sections and comprehensive project galleries.

## Features

- 🎨 Clean, minimalist design with warm color palette
- 🌙 Dark theme by default with theme toggle
- 🔒 Password-protected work section with session management
- 📱 Fully responsive design
- ♿ WCAG-compliant accessibility
- 🎥 Video project demonstrations
- 🔍 Project search and filtering
- ⚡ Optimized performance with lazy loading

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **UI Components**: Custom components + Shadcn/ui
- **Icons**: Lucide React
- **Typography**: Poppins font family

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

### Build Issues?

If you get dependency errors (especially about `@radix-ui` packages), run:

```bash
npm run install-clean  # Clean reinstall of all dependencies
npm run build
```

For other build issues, try:
```bash
npm run build-verify  # Complete build verification with cleanup
```

Or see [BUILD_TROUBLESHOOTING.md](./BUILD_TROUBLESHOOTING.md) for detailed debugging steps.

### Additional Commands

- **Type check only**: `npm run type-check`
- **Clean build cache**: `npm run clean`
- **Complete verification**: `npm run build-verify`

## Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy automatically on push to main branch

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Build settings are configured in `vercel.json`
3. Deploy automatically on push to main branch

### Option 3: Traditional Web Hosting
1. Run `npm run build` to create production files
2. Upload the `dist/` folder contents to your web server
3. Ensure your server handles SPA routing (see server configuration below)

## Server Configuration

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Protected Work Section

The portfolio includes a password-protected section for confidential projects:
- Default password: `portfolio2024`
- Session-based authentication with configurable timeouts
- Automatic logout on token expiry
- Session extension capabilities

To change the password, update the `PASSWORD` constant in `/utils/auth.ts`.

## Performance Optimizations

- Code splitting with vendor and UI chunks
- Image optimization with fallback handling
- Lazy loading for better initial load times
- Optimized font loading
- Compressed assets in production

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## License

This portfolio is for demonstration purposes. Please don't use the design or content for your own portfolio without permission.