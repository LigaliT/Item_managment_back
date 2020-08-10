const db = require('../models');
const bcrypt = require('../config/bcryptconfig');
const tokens = require('./Tokens');

class UserController {
    checkPass(password, hashPass){
        return bcrypt.compareSync(password,hashPass);
    }
    Login(req,res){
        let obj = req.body;
        db.User.findOne({
            where: {
                login: obj.login,
            }
        }).then(user => {
            if(user){
                if(this.checkPass(obj.password, user.dataValues.password)) {
                        res.send({
                        token: tokens.genAccessToken(user.dataValues.id)
                    });
                }
                else
                {
                    res.send("Incorrect password");
                }
            }
            else
            {
                res.send("User doesn't exist");
            }
        })
    }
    Register(req,res){
        let obj = req.body;
        db.User.findOrCreate({
            where: {login : obj.login},
            defaults: {
                login: obj.login,
                email: obj.email,
                password: bcrypt.hashSync(obj.password, bcrypt.salt),
                name: obj.name,
                phone: obj.phone,
                date: obj.date,
                admin: false
            }
        }).then(
            ([user, created]) => {
                if(created)
                {
                    res.send({
                        token: tokens.genAccessToken(user.dataValues.id)
                    });
                }
                else {
                    res.send("User is already exist");
                }
            }
        )
    }
}

module.exports = new UserController();