const express = require('express');
const PORT = 5000;
const app = express();
const router = require('./routes')
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(router);

app.listen(PORT, () => {
    console.log(`broadcasting on http://localhost:${PORT}`)
});