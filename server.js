// server.js
const path = require('path');
const express = require('express');
const app = express();
app.static.mime.define({'application/wasm': ['wasm']})
app.use(express.static(path.join(__dirname + '')));
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});