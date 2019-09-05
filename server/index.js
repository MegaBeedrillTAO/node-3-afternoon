const express = require('express');
const app = express();
require('dotenv').config();
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const pc = require('./Controllers/productController')

massive(CONNECTION_STRING)
.then(dbInst => {
    app.set("db", dbInst);
})
.catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', pc.create);
app.get('/api/products', pc.getAll);
app.get('/api/products/:id', pc.getOne);
app.put('/api/products/:id', pc.update);
app.delete('/api/products/:id', pc.deleteProductFunc);


app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`);
})