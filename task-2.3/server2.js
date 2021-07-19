const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const axios = require('axios');


app.get('/api', async (req, res) => {

    try {
        console.log('in api')
        const res1 = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);;
        // need to learn to set header
        res.setHeader("Content-Type", "text/html");
        res.status(res1.status).send(res1.data);
    } catch (err) {
        console.log(err.response);
        res.status(err.response.status).send(err);
    }
})

app.use('/*', (req, res) => {
    res.status(404).send('Not found');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})