
const express = require('express')
const app = express()

let products = []

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json())

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index',{products: products})
})

app.post('/addProduct', (req, res) => {
    let data = req.body
    products.push(data)

    console.log(products)

    res.status(200)
    res.redirect('/')
})

// app.get('/getProducts', (req, res) => {
//     res.json(products)
// })

app.use((req, res) => {
    res.status(404)
    res.render('notFound')
})

app.listen(3000, () => console.log('http://localhost:3000'))
