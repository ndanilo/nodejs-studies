require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const client = redis.createClient({
    host: 'redis'
});

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('HELLO, WORLD!!!!! Node Project!');
});

app.post('/create', (req, res) => {
    client.get('req:obj', (err, cacheKey) => {

        if (cacheKey !== null)
            return res.send(JSON.parse(cacheKey));

        const obj = {
            received: req.body
        };
    
        client.setex('req:obj', 10, JSON.stringify({
            obj,
            redis: "cached"
        }));
        
        return res.send(obj);
    });
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`environmentA: ${process.env.Test}`);
console.log(`running server on: http://${HOST}:${PORT}`);