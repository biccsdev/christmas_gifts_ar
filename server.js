require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');

const CERT_PATH = process.env.CERT_PATH;
const KEY_PATH = process.env.KEY_PATH;

const port = process.env.PORT || 8080;

const options = {
    key: fs.readFileSync(KEY_PATH),
    cert: fs.readFileSync(CERT_PATH),
};

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

https.createServer(options, app).listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

// app.listen(port, () => {
//     console.log(`Listening on http://localhost:${port}`);
// })