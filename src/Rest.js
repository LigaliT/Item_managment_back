const secured = require('./index');
const UserController = require('./UserController');

secured.app.post("/login",(req,res) => {
    UserController.Login(req,res);
});

secured.app.post("/register",(req,res) => {
    UserController.Register(req,res);
});