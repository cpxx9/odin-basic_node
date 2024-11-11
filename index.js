// import {} from "dotenv/config";
// import fs from "fs/promises";
// import http from "http";
// import url from "url";
// import path from "path";
// import express from "express";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
require("dotenv").config();
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const fileOptions = {
  root: path.join(__dirname, "public"),
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true,
  },
};

app.get("/", (req, res) =>
  res.sendFile("index.html", fileOptions, function (err) {
    if (err) {
      throw new Error("Server error...");
    } else {
      console.log("Sent: index.html");
    }
  })
);

app.get("/about", (req, res) =>
  res.sendFile("about.html", fileOptions, function (err) {
    if (err) {
      throw new Error("Server error...");
    } else {
      console.log("Sent: about.html");
    }
  })
);

app.get("/contact-me", (req, res) =>
  res.sendFile("contact-me.html", fileOptions, function (err) {
    if (err) {
      throw new Error("Server error...");
    } else {
      console.log("Sent: contact-me.html");
    }
  })
);

app.get("*", (req, res) =>
  res.sendFile("404.html", fileOptions, function (err) {
    if (err) {
      throw new Error("Server error...");
    } else {
      console.log("Sent: 404.html");
    }
  })
);

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});

// const server = http.createServer(async (req, res) => {
//   try {
//     if (req.method === "GET") {
//       let filePath;
//       if (req.url === "/") {
//         filePath = path.join(__dirname, "public", "index.html");
//       } else if (req.url === "/about") {
//         filePath = path.join(__dirname, "public", "about.html");
//       } else if (req.url === "/contact-me") {
//         filePath = path.join(__dirname, "public", "contact-me.html");
//       } else {
//         filePath = path.join(__dirname, "public", "404.html");
//       }

//       const data = await fs.readFile(filePath);
//       res.setHeader("Content-Type", "text/html");
//       res.write(data);
//       res.end();
//     } else {
//       throw new Error("Method not allowed!");
//     }
//   } catch (error) {
//     res.writeHead(500, { "content-type": "text/plain" });
//     res.end("Server error");
//   }
// });

// server.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
