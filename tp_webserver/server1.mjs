"use strict";

import { createServer, request } from "http";
import { readFile } from "fs/promises";
import { extname } from "path";
import { fileURLToPath } from 'url';


function webserver(req, res){
    const { url } = req;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Welcome to my server version 1.0.0');
  }
  else if (url.startsWith('/WWW/')) {
    const filepath = fileURLToPath(new URL(url, `http://${req.headers.host}`));
    try {
      const data = readFile(filepath);
      const contentType = extname(filepath) === '.html' ? 'text/html' : 'text/plain';
      res.setHeader('Content-Type', contentType);
      res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 404;
      res.end(`File not found: ${filepath}`);
    }
  }
  else if (url === "/exit") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<!doctype html><html><body>The server will stop now.</body></html>");
    process.exit(0);
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Page not found');
  }
};


// get the port number from the command line arguments
const port = process.argv[2] || 8000;

// create server object
const server = createServer(webserver);

// start listening on the specified port
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

