const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/',require('./routes/index'));


//setting up the view engine.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//catch-all route for 404 errors 
// app.use((req,res)=> {
//     res.status(404).send('404:no');
// });

app.listen(port, (err)=> {
    if(err) {
        console.log(err);
    }
    console.log("server is running on server :",port);
});