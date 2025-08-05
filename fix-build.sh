#!/bin/bash

set -e  # Exit on any error

echo "🔧 Fixing Ian Betts Portfolio Build Issues..."
echo "⚠️  This will remove node_modules and reinstall dependencies"
read -p "Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 1
fi

# Step 1: Remove the problematic _redirects directory completely
echo "📁 Removing problematic _redirects directory..."
rm -rf public/_redirects/
rm -rf public/_redirects

# Step 2: Create the correct public directory structure
echo "📂 Creating correct public directory structure..."
mkdir -p public

# Step 3: Create the correct _redirects file
echo "📄 Creating correct _redirects file..."
echo "/*    /index.html   200" > public/_redirects

# Step 4: Verify the file was created correctly
echo "✅ Verifying _redirects file:"
ls -la public/_redirects
cat public/_redirects

# Step 5: Clean install all dependencies
echo "🧹 Cleaning and reinstalling dependencies..."
rm -rf node_modules
rm -f package-lock.json
npm install

# Step 6: Run type check
echo "🔍 Running type check..."
npm run type-check

# Step 7: Attempt build
echo "🏗️ Building project..."
npm run build

# Step 8: Verify build output
echo "📦 Checking build output..."
if [ -d "dist" ]; then
    echo "✅ SUCCESS: dist/ folder created!"
    ls -la dist/
else
    echo "❌ FAILED: dist/ folder not created"
    echo "Check the build output above for errors"
fi

echo "🎉 Build fix complete!"