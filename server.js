const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const host = '0.0.0.0'

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
})