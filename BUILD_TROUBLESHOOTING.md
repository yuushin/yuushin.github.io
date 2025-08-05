# Build Troubleshooting Guide

If `npm run build` is not producing a `dist/` folder, follow these steps to diagnose and fix the issue:

## Quick Fix for Missing Dependencies Error

If you see errors about missing `@radix-ui` packages, run:

```bash
npm run install-clean
npm run build
```

This will reinstall all dependencies including the required Radix UI packages for shadcn/ui components.

## Step 1: Clean Build Environment

```bash
# Clean cache and dependencies
npm run clean
rm -rf dist/
npm install
```

## Step 2: Check for TypeScript Errors

```bash
# Run type checking to see if there are any TS errors
npm run type-check
```

If there are TypeScript errors, fix them before proceeding.

## Step 3: Try Different Build Commands

```bash
# Try building without type checking first
npm run build

# If that fails, try debug mode
npm run build:debug

# Check if Vite is working at all
npx vite build --help
```

## Step 4: Check for File Issues

Make sure these files exist and are correctly formatted:
- `/index.html` (entry point)
- `/main.tsx` (main React file) 
- `/App.tsx` (main component)
- `/vite.config.ts` (Vite configuration)

## Step 5: Verify Dependencies

```bash
# Make sure all dependencies are installed
npm ls

# Check for any missing peer dependencies
npm audit fix
```

## Step 6: Test with Minimal Build

If the build still fails, try creating a minimal test:

1. Temporarily rename `App.tsx` to `App.tsx.backup`
2. Create a simple test `App.tsx`:

```tsx
export default function App() {
  return <div>Hello World</div>
}
```

3. Try building: `npm run build`
4. If it works, the issue is in your components
5. Restore your original App.tsx and check component imports

## Step 7: Check Common Issues

### Public Directory Issues
- Make sure `/public/_redirects` is a file, not a directory
- Remove any TypeScript files from `/public/` directory

### Import Issues
- Check for circular imports
- Verify all imported files exist
- Check for incorrect file extensions in imports

### Tailwind Issues
- Make sure globals.css imports correctly
- Check for Tailwind v4 syntax compatibility

## Step 8: Debug Output

Add verbose logging to see what's happening:

```bash
# Run with debug output
DEBUG=vite:* npm run build

# Or try with different log levels
npm run build -- --logLevel info
```

## Common Solutions

### Solution 1: Fix Public Directory
```bash
# Remove problematic _redirects directory
rm -rf public/_redirects/
# The correct _redirects file should already be created
```

### Solution 2: Update Tailwind Config
Make sure `tailwind.config.js` has correct content paths.

### Solution 3: Check Node Version
```bash
node --version
# Should be 18+ for best compatibility
```

### Solution 4: Clear All Caches
```bash
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf dist/
npm ci
```

## If All Else Fails

1. Create a new terminal/command prompt
2. Navigate to your project directory
3. Run commands in this exact order:

```bash
rm -rf dist/
rm -rf node_modules/.vite
npm install
npm run type-check
npm run build
ls -la dist/
```

The `ls -la dist/` command should show your built files if successful.