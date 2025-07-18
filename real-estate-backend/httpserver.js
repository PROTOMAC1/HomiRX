const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/not-found') {
    res.statusCode = 404;
    res.end('Page not found');
  } else if (req.url === '/forbidden') {
    res.statusCode = 403;
    res.end('Access denied');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Me</h1> <p>Hay there!</p>');
  }
});

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});