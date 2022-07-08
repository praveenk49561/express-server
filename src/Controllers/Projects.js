const projects = require('../Constants/projects');

const getAllProjects = async (req, res) => {
    try {
      res.status(200).send({ status: '200', message: 'Projects Retrived Successfully !', data: { projects } });
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      next(err);
    }
};

module.exports = {
    getAllProjects,
}