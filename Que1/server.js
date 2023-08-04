const http = require('http');
const fs = require('fs');

const port = 8000;

// Helper function to serve static files
function serveStaticFile(res, filename, contentType) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// Create the server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // Serve the index.html file
      serveStaticFile(res, './index.html', 'text/html');
    } 
  } 
 
 else if (req.method === 'POST') {
    if (req.url === '/') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', () => {
        
        // Do something with the request body
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is a POST request with body: ' + body);
      });
    } else {
      // Handle 404 Not Found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    // Handle other HTTP methods
    res.writeHead(101, { 'Content-Type': 'text/plain' });
    res.end('101 Not Implemented');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});