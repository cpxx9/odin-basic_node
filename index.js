import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, { "content-type": "]text/html" });
  res.end("<h1>Hello World!</h1>");
});

ServiceWorkerRegistration.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
