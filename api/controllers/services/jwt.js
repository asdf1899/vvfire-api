var jwt = require('jsonwebtoken');

module.exports = {
  sign: function(payload) {
    //console.log(sails.config.secret);
    return jwt.sign({
      data: payload
    }, sails.config.secret, {expiresIn: '1day'});
  },
  verify: function(token, callback) {
    jwt.verify(token, sails.config.secret, callback);
  }
};
