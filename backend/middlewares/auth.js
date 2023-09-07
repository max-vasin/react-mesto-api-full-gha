const JWT = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/constants');
/*--------.env---------*/
require('dotenv').config();

/*---------------------*/

const auth = (req, res, next) => {
  const tokenKey = req.headers.cookie;

  if (!tokenKey) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  const token = tokenKey.slice(4);

  let payload;
  try {
    //payload = JWT.verify(token, 'some-secret-key');
    /*--------.env---------*/
    const { NODE_ENV, JWT_SECRET } = process.env;

    const token = JWT.sign(
      { _id: user._id },
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
