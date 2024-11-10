import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
  } else if (req.url === "about") {
  } else if (req.url === "contact-me") {
  } else {
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
