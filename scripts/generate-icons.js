const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const logoPath = path.join(path.dirname(__dirname), 'public', 'logo.png');
const iconsDir = path.join(path.dirname(__dirname), 'public', 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const generateIcon = async (size) => {
  try {
    const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    await sharp(logoPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 10, g: 10, b: 10, alpha: 1 } // Dark background matching theme
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated: icon-${size}x${size}.png`);
  } catch (error) {
    console.error(`❌ Error generating icon-${size}x${size}.png:`, error.message);
  }
};

const generateAllIcons = async () => {
  console.log('🎨 Generating PWA icons from logo.png...\n');
  
  for (const size of sizes) {
    await generateIcon(size);
  }
  
  console.log('\n✨ All PWA icons generated successfully!');
  console.log('📁 Location: public/icons/');
};

generateAllIcons().catch(console.error);
