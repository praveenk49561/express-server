const { verifyJWT } = require('../Services/Jwt');
const { ConflictError } = require('../Utils/ApiErrors');

const decodeToken = async (header) => {
  if (!header) {
    throw new ConflictError('Authorization header missing');
  }
  const token = header.replace('Bearer ', '');
  const payload = await verifyJWT({ token });
  return payload;
};

module.exports = async (req, res, next) => {
  const { path, method } = req;
  if (['/api/login'].includes(path) || (['/api/users'].includes(path) && method === 'POST')) {
    return next();
  }
  try {
    req.context = await decodeToken(req.header('Authorization') || req.header('authorization'));
    return next();
  } catch(err) {
    console.log('[ERROR]');
    console.log(err.message);
    next(err);
  }
};