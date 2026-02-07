#!/bin/bash

echo "==================================="
echo "Creative Agency CRM Landing Platform Setup"
echo "==================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v16 or higher) and try again."
    exit 1
else
    NODE_VERSION=$(node -v | cut -d'v' -f2)
    IFS='.' read -ra VERSION_PARTS <<< "$NODE_VERSION"
    if [ "${VERSION_PARTS[0]}" -lt 16 ]; then
        echo "❌ Node.js version is too old. Please upgrade to Node.js v16 or higher."
        exit 1
    fi
    echo "✅ Node.js version $NODE_VERSION detected"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm and try again."
    exit 1
else
    echo "✅ npm detected"
fi

# Install dependencies
echo ""
echo "📦 Installing frontend dependencies..."
npm install

# Check if server directory exists
if [ ! -d "./server" ]; then
    echo "❌ Server directory does not exist!"
    exit 1
fi

echo ""
echo "📦 Installing backend dependencies..."
cd server && npm install
cd ..

echo ""
echo "==================================="
echo "Installation completed successfully!"
echo "==================================="

echo ""
echo "📝 To configure your email service:"
echo "1. Copy the example environment file: cp .env.example server/.env"
echo "2. Edit the server/.env file with your email credentials"
echo "3. For Gmail, use an app password (not your regular password)"
echo ""
echo "🚀 To run the application:"
echo "- Frontend only: npm run dev"
echo "- Backend only: npm run dev:server"
echo "- Both together: npm run dev:all"
echo ""
echo "📧 To test email service: npm run test:email"
echo ""