const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// All requests prefixed with / will serve the "public" directory
app.use("/", express.static(path.resolve(__dirname, "public")));

// Redirect all routes to index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
})

app.listen(PORT || 3000, () => {
    console.log(`Server running on port #${PORT}`)
})