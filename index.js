const express = require('express');
const app = express();
require('dotenv').config();
const port = env.process.PORT || 3000;

app.listen(port, (err)=> {
    if(err) {
        console.log(err);
    }
    console.log("server is running on server :",port);
})