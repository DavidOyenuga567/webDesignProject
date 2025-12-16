// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home - Week 1"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// contact route
app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact"}
    res.render('contact', { state, head});
    console.log('contact')
  });

  app.get('/aboutus', (req, res) => {
    state={aboutus : true}
    head={title:"About Us"}
    res.render('aboutus', { state, head});
    console.log('aboutus')
  });

app.get('/shop', (req, res) => {
    state={shop : true}
    head={title:"shop"}
    res.render('shop', { state, head});
    console.log('shop')
  });

  app.get('/signup', (req, res) => {
    state={signup : true}
    head={title:"signup"}
    res.render('signup', { state, head});
    console.log('signup')
  });

  app.get('/cart', (req, res) => {
    state={cart : true}
    head={title:"cart"}
    res.render('cart', { state, head});
    console.log('cart')
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});