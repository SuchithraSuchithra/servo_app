require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});