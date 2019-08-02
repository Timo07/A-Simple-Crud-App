require('./models/db');
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use('/', routes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));