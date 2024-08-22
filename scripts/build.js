const fs = require('fs');
const path = require('path');

const cssFiles = ['t3s-base.css', 't3s-comp.css', 't3s-ani.css', 't3s-util.css'];
const cssDirectory = path.join(__dirname, '../src/css');
const outputFilePath = path.join(__dirname, '../src/t3s.css');

combineCssFiles(cssFiles, cssDirectory, outputFilePath);

async function combineCssFiles(fileNames, dirPath, outputFile) {
    try {
        let combinedCss = '';

        for (const file of fileNames) {
            const filePath = path.join(dirPath, file);
            if (fs.existsSync(filePath)) {
                const cssContent = fs.readFileSync(filePath, 'utf8');
                combinedCss += `\n${cssContent}\n\n\n`;
            } else {
                console.warn(`File ${file} does not exist. Skipping.`);
            }
        }

        fs.writeFileSync(outputFile, combinedCss, 'utf8');
        console.log(`Combined CSS written to ${outputFile}`);
    } catch (err) {
        console.error('Error combining CSS files:', err);
    }
}
