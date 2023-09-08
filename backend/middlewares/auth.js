const JWT = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/constants');
/*--------.env---------*/
require('dotenv').config();

/*---------------------*/

const auth = (req, res, next) => {
  //const tokenKey = req.headers.cookie;
  const { authorization } = req.headers;

 if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }
  // if (!tokenKey) {
  //   next(new UnauthorizedError('Необходима авторизация'));
  //   return;
  // }
  // const token = tokenKey.slice(4);
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    //payload = JWT.verify(token, 'some-secret-key');
    /*--------.env---------*/
    const { NODE_ENV, JWT_SECRET } = process.env;

    payload = JWT.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'
    );
    /*---------------------*/
  } catch (err) {
      next(new UnauthorizedError('Необходима авторизация'));
      return;
  }

  req.user = payload;

  next();
};

module.exports = { auth };
