const userModel = require('../Models/Users');
const { generateJWT } = require('../Services/Jwt');
const { NotFoundError, BadRequestError } = require('../Utils/ApiErrors');

const loginAuth = async (req, res, next) => {
    try {
      const user = await userModel.findOne({ name: req?.body?.userName });

      if (!user) {
        throw new NotFoundError('User not found');
      }

      if (user?.password === req?.body?.password) {
        const accessToken = await generateJWT({
          payload: user.toJSON()
        });
        res.status(200).send({ status: '200', message: 'Login Success !', data: { accessToken, user } });
      } else {
        throw new BadRequestError('Username or Password is invalid!');
      }

      // next();
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      next(err);
    }
};

module.exports = { loginAuth };