import sharp from 'sharp';
import fs from 'fs';

const svgBuffer = fs.readFileSync('./public/favicon-simple.svg');

// Create multiple sizes for better browser support
const sizes = [16, 32, 48];

for (const size of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(`./public/favicon-${size}.png`);
  
  console.log(`Created favicon-${size}.png`);
}

// Create the main favicon.png (32x32)
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('./public/favicon.png');

console.log('Created favicon.png');
