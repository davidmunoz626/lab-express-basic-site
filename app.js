
const express = require('express')

const path = require('path')

const app = express()

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'))

require('./db/BBDD')

const Product = require('./model/products.model')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tienda', (req, res) => {

    Product
        .find()
        .sort({ price: -1 })
        .then(allProducts => {
            res.render('tienda', { products: allProducts })
        })


})


app.listen(5005, () => console.log('server open'))