const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios');


const filterip = (req, res, next) => {
    console.log(req.ip);
    if (req.ip === ':1') {
        res.status(403).send('forbidden');
    } else {
        next();
    }
}
app.use(filterip);
//error handler middleware



app.get('/y1', (req, res) => {
    res.status(200).send('in y')
})

app.get('/z1', (req, res) => {
    res.status(200).send({ a: 1 })
})

app.use('*', (req, res) => {
    res.status(404).send('Not found');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})