const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// All requests prefixed with / will serve the "public" directory
app.use("/", express.static(path.join(__dirname, "public")));

// Basic HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get('/tictactoe', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "tictactoe.html"));
})

app.listen(PORT, () => {
    console.log(`Server running on port #${PORT}`)
})