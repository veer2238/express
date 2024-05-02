//server.js
const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const cors = require('cors');
app.use(cors());



// first

app.get('/api/data', (req, res) => {
const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error(err);
return res.status(500).json({ error: 'Internal Server Error' });
}

const jsonData = JSON.parse(data);
res.json(jsonData);
});
});


app.listen(8000, () => {
console.log("server connected")
})