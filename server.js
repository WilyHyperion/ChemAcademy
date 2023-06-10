const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});
app.get('/javascript/:file', (req, res) => {
    res.sendFile(__dirname + "/public/javascript/" + req.params.file);
});
app.get('/css/:file', (req, res) => {
    res.sendFile(__dirname + "/public/css/" + req.params.file);
});
app.get('/images/:file', (req, res) => {
    res.sendFile(__dirname + "/public/images/" + req.params.file);
});
app.get('/data/:file', (req, res) => {
    res.sendFile(__dirname + "/public/data/" + req.params.file);
});


app.listen(port, () => {
    console.log("listening on port " + port);
});