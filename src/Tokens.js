const jwt = require('jsonwebtoken');

class Tokens {
    genAccessToken = (id) => {
        return jwt.sign({
            id
        }, "mom", {expiresIn: '10d'})
    }
}

module.exports = new Tokens();

