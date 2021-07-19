const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios');


app.get('/', async (req, res) => {
    // console.log(req.params.id);
    //Content-Type: application/json

    // i think proxy server is in req.query
    const url = `http://localhost:3001/api`;
    // console.log(`https://jsonplaceholder.typicode.com/todos/1`);
    // need to ask question such that the headers which are coming in req wohi axios main bhejne
    function getUserAccount() {
        return axios.get(url);
    }

    function getUserPermissions() {
        return axios.get(url);
    }

    try {
        const res1 = await getUserAccount();
        const res2 = await getUserPermissions();
       // console.log(JSON.parse(res1.data) + "asdasdasd" + JSON.parse(res2.data));
        const obj = Object.assign(res1.data, res2.data);
        console.log(obj);
        // need to learn to set header
        res.status(200).send(obj);
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