const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) { 
res.jsonp({ user: 'Rohmatul Ummah - 163210005 - Komputerisasi Akuntansi' });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))