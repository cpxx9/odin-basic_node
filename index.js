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
