const fs = require('fs');
const zlib = require('zlib');

function compressFile(sourcePath, zipPath) {
  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(zipPath);

  readStream.pipe(zlib.createGzip()).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File compressed successfully:', zipPath);
  });

  writeStream.on('error', (error) => {
    console.error('Error writing the ZIP file:', error);
  });
}

// Usage example:
const sourceFile = './jenish.txt'; // Replace with the path of the file you want to compress
const zipFile = './f.txt.gz'; // Replace with the desired destination for the ZIP file

compressFile(sourceFile, zipFile);



