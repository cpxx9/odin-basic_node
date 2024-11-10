import fs from "fs";
import http from "http";
import url from "url";
const PORT = 8000;

const server = http.createServer((req, res) => {
  const urlQuery = url.parse(req.url, true);

  try {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
    } else if (req.url === "about") {
      res.writeHead(200, { "content-type": "text/html" });
    } else if (req.url === "contact-me") {
      res.writeHead(200, { "content-type": "text/html" });
    } else {
      res.writeHead(404, { "content-type": "text/html" });
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
