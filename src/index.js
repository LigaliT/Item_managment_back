const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');



//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//routes


//register and login routes

app.listen(5000, () => {
    console.log("Server has started on port 5000")
});


module.exports.app = app;