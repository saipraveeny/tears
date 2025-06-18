#!/bin/bash

echo "🚀 Building Tears Hot Sauce Website..."

# Build the project
npm run build

echo "✅ Build completed successfully!"

echo "📦 Choose deployment platform:"
echo "1. Netlify (Drag and drop build folder)"
echo "2. Vercel (Using Vercel CLI)"
echo "3. GitHub Pages"
echo "4. Custom server"

read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo "🌐 Deploying to Netlify..."
    echo "Please drag the 'build' folder to Netlify dashboard"
    echo "Or use: netlify deploy --prod --dir=build"
    ;;
  2)
    echo "⚡ Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
    fi
    ;;
  3)
    echo "📚 Deploying to GitHub Pages..."
    echo "Add this to package.json:"
    echo '"homepage": "https://yourusername.github.io/your-repo-name",'
    echo '"predeploy": "npm run build",'
    echo '"deploy": "gh-pages -d build"'
    echo ""
    echo "Then run: npm run deploy"
    ;;
  4)
    echo "🖥️  Custom server deployment..."
    echo "Upload the 'build' folder to your server"
    ;;
  *)
    echo "❌ Invalid choice"
    ;;
esac

echo "🎉 Deployment process initiated!" 