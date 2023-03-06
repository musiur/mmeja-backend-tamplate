// home.controller.js

// Function to handle GET request to root URL
exports.home = function (req, res) {
  res.send("Hello, world!");
};

// Function to handle GET request to /about subroute
exports.about = function (req, res) {
  res.send("This is the About page.");
};
