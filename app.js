const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors({
    origin: '*'
}))


app.get(':endpoint([\\/\\w\\.-]*)', (req,res) => {
    let endpoint = 'http://soaravg.eastus.cloudapp.azure.com:8080' + req.params.endpoint;

    axios.get(endpoint).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    })
})

app.listen(5000,() => {
    console.log('Running reverse proxy on port 5000...');
});