const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Todo bien")
})

const port = process.env.port || 8081;
app.listen(port, () => {
    console.log("Tamo escuchando")
})