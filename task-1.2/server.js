const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/cat', (req, res) => {
    if (req.query.id) {
        setTimeout(() => {
            res.status(200).send(req.query.id.toUpperCase());
        }, 1000)
    } else {
        res.status(400).send('Bad req')
    }
})

app.use('*', (req, res) => {
    res.status(404).send('Not found');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})