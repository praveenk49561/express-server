const { APIError } = require('../Utils/ApiErrors');

module.exports = async (error, req, res, next) => {

  console.log('[ERROR]');
  console.log(error, 'jjkhjjkb');

  // catch api error
  if (error instanceof APIError) {
    return res.status(error.status).send({
      code: error.status,
      message: error.message
    });
  }

  // default api error
  return res.status(500).send({
    code: 500,
    message: error.message || 'Something went wrong!'
  });
};