//######### IMPORT STUFF #########
const express         = require('express');
const morgan          = require('morgan');
const {engine}        = require('express-handlebars');
const path  = require('path');

//######### SET UP #########
const app = express();
const port = 3000;

//######### HANDLE STATIC FILE #########
app.use(express.static(path.join(__dirname,"public")));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));

//######### USE MORGAN TO LOGGER INFORMATION HTTP REQUEST #########
app.use(morgan('combined'));

//######### TEMPLATE ENGINE #########
/** Our config set for template engine
 * Change extension name handlebars -> hbs
 * 
 */
app.engine('hbs', engine({extname:".hbs",}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, '/resources/views'));


//######### DEFINE ROUTE #########
app.get('/',(req,res)=> {res.render('home');});

app.get('/blogs',(req,res)=>{res.render('blogs')});

app.get('/contact-us',(req,res)=>{res.render('contact-us')});

app.get('/about-us',(req,res)=>{res.render('about-us')});

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));