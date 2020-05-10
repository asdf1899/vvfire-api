var webtoken = require('../controllers/services/jwt.js');
module.exports = function(req, res, next) {
  var token;
  //Check if authorization header is present
  if(req.headers && req.headers.authorization) {
    token = req.headers.authorization;
  } else {
    //authorization header is not present
    return res.status(401).json({error: 'No Authorization header was found'});
  }
  webtoken.verify(token, (err, decoded) => {
    if(err) {
      return res.status(401).json({error: 'Invalid token'});
    }
    req.user = decoded;
    currentUser = decoded;
    next();
  });
};
