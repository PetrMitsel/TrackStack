import 'dotenv/config';
// lib/app.ts
import express = require('express');
// Create a new express application instance
const app: express.Application = express();
const PORT = process.env.PORT || 4000;



app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});