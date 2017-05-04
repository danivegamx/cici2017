const path = require('path');
const consolidate = require('consolidate');
const express = require('express');

const app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/dist', express.static('dist'));

//default route
app.get('/', (req, res) => res.render('index', { title : 'La temporada 7 de GoT is cooming' }));



const listener = app.listen(1337, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
