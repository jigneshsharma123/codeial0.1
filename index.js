const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use('/',require('./routes/index'));



app.listen(port, (err)=> {
    if(err) {
        console.log(err);
    }
    console.log("server is running on server :",port);
});