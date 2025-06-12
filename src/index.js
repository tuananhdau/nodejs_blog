const express = require('express')

const morgan = require('morgan')

const app = express()

const port = 3000

const hdb = require('express-handlebars').engine;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
//Http logger

app.use(morgan('combined'))

//template engine

app.engine('.hbs', hdb({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname,'resources/views'));

// console.log(path.join(__dirname,'resources//views'))

app.get('/', (req, res) => {

res.render('home')

})

app.listen(port, () => {

console.log(`Example app listening on port http://localhost:${port}`)

});