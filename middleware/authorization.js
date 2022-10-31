const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader;

  if (token == null) return res.send({auth: false, _token: token});

  jwt.verify(token,"sodposajfspfsvfaoxjq28343r4fsd", (err, user) => {
    console.log(err);

    if (err) return res.send({auth: false, _token: token});

    req.user = user

    next()
  })
}
module.exports=authenticateToken;