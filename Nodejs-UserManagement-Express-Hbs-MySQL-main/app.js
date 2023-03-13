const express = require('express');
const exphbs = require('express-handlebars');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware

app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));




const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');



// router
//app.get ('',(req,res)=>{
//res.render('home');
//});
const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));