import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the built files
const htmlPath = path.join(__dirname, 'dist/index.html');
const cssPath = path.join(__dirname, 'dist/assets/index-Bd8-o6U3.css');
const jsPath = path.join(__dirname, 'dist/assets/index-Qv9XsRZQ.js');
const reactPath = path.join(__dirname, 'dist/assets/react-vendor-wGySg1uH.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');
const react = fs.readFileSync(reactPath, 'utf8');

// Create standalone HTML with inlined assets
const standalone = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Kentucky Search & Seizure Case Law Explorer - Explore Fourth Amendment case law" />
    <title>KY Search & Seizure Explorer</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
${react}
${js}
    </script>
  </body>
</html>`;

// Write standalone file
fs.writeFileSync(path.join(__dirname, 'ky-search-seizure-standalone.html'), standalone);
console.log('✅ Created: ky-search-seizure-standalone.html');
console.log('📦 File size:', Math.round(standalone.length / 1024), 'KB');
console.log('🎯 This file can be opened directly in any browser!');
