/*
|--------------------------------------------------------------------------
| Projects Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| GET      /api/projects
| 
*/

const express = require('express');
const projects = require('../Constants/projects');
const router = express.Router();

// METHOD  : GET
// ROUTE   : /api/projects
// FUNCTION: Check 
router.get('/', async (req, res) => {
  try {
    console.log(req);
    setTimeout(() => {
      res.status(200).send({ status: '200', message: 'Login Success !', data: { projects } });
    }, 5000);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

module.exports = router;