#!/bin/bash
echo "Building application..."
npm run build

echo "Copying to deployment folder..."
cp -r dist/* ky-search-seizure-app/

echo "✅ Ready to deploy! Upload ky-search-seizure-app/ to your web host"
