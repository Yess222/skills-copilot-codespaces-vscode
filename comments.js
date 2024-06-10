// Create web server and listen to port 3000
// Send the comments to the client

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});