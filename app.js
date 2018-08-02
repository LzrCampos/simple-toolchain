const express = require('express');

const app = express();

const HOST = '0.0.0.0';
const PORT = 8000;

app.use('/view', express.static(__dirname + '/view'));

app.get('/', (req, res) => {
    return res.redirect('./view/index.html');
});

app.listen(PORT, HOST)