const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios');


app.get('/', (req, res) => {
    console.log(req.query.id);
    //Content-Type: application/json

    // i think proxy server is in req.query


    // need to ask question such that the headers which are coming in req wohi axios main bhejne
    axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/todos/${req.query.id}`

    })
        .then(function (response) {
            console.log(response)
            // handle success
            //console.log(response.headers);
            res.status(response.status).send({ status: response.status, body: response.data, header: response.headers });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            res.status(error.response.status).send(error);
        })
})

app.use('*', (req, res) => {
    res.status(404).send('Not found');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})