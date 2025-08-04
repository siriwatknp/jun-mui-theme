import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the main theme.ts file
const themePath = path.join(__dirname, 'src/theme.ts');
let themeContent = fs.readFileSync(themePath, 'utf8');

// Extract component imports dynamically from the theme file
const importRegex = /import\s+\{\s*(\w+)\s*\}\s+from\s+"(\.\/theme\/components\/[^"]+)"/g;
const componentImports = [];
let match;

while ((match = importRegex.exec(themeContent)) !== null) {
  componentImports.push({
    name: match[1],
    file: match[2]
  });
}

console.log(`Found ${componentImports.length} component imports to process`);

// Store the component definitions
const componentDefinitions = {};

// Read and extract component definitions
componentImports.forEach(({ name, file }) => {
  const componentPath = path.join(__dirname, 'src', file + '.ts');
  try {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    
    // Extract the object content between the braces after the export
    const match = componentContent.match(/export const \w+: ThemeOptions\["components"\] = (\{[\s\S]*\});/);
    if (match) {
      // Get the full object including braces
      let objectContent = match[1];
      
      // Remove the outer braces to get just the inner properties
      // This regex finds content between the outermost braces
      const innerMatch = objectContent.match(/^\s*\{\s*([\s\S]*)\s*\}\s*$/);
      if (innerMatch) {
        // Clean up the content: remove trailing commas before closing braces
        let content = innerMatch[1];
        // Remove trailing comma at the end of the content
        content = content.replace(/,\s*$/, '');
        componentDefinitions[name] = content;
      }
    }
  } catch (err) {
    console.error(`Failed to read ${componentPath}: ${err.message}`);
  }
});

// Remove all component import statements
componentImports.forEach(({ file }) => {
  const importPattern = new RegExp(`import \\{ \\w+ \\} from "${file}";\n`, 'g');
  themeContent = themeContent.replace(importPattern, '');
});

// Replace the spread operators with actual content
let processedContent = themeContent;

// Find the components section and replace spreads
const componentsSection = processedContent.match(/components:\s*\{([^}]+)\}/s);
if (componentsSection) {
  let newComponentsContent = '\n';
  
  // Get the list of spreads
  const spreads = componentsSection[1].match(/\.\.\.(\w+)/g);
  if (spreads) {
    const componentContents = [];
    
    spreads.forEach((spread) => {
      const componentName = spread.replace('...', '');
      if (componentDefinitions[componentName]) {
        const content = componentDefinitions[componentName].trim();
        if (content) {
          componentContents.push(content);
        }
      }
    });
    
    // Join all component contents with comma and newline
    if (componentContents.length > 0) {
      newComponentsContent += '    ' + componentContents.join(',\n    ');
    }
  }
  
  newComponentsContent += '\n  ';
  
  // Replace the components section
  processedContent = processedContent.replace(
    /components:\s*\{[^}]+\}/s,
    `components: {${newComponentsContent}}`
  );
}

// Final cleanup: fix any double commas
processedContent = processedContent.replace(/,\s*,/g, ',');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the consolidated theme file
const outputPath = path.join(distDir, 'theme.ts');
fs.writeFileSync(outputPath, processedContent);

console.log(`✅ Successfully built consolidated theme to ${outputPath}`);