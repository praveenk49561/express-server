/*
|--------------------------------------------------------------------------
| Users Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| POST      /api/users/create
| 
*/

const express = require('express');
const router = express.Router();

// METHOD  : POST
// ROUTE   : /api/users/create
// FUNCTION: Creates new user
router.post('/create', (req, res) => {
  try {
    console.log(req);
    res.status(200).send({ status: '200', message: 'Created Successfully !' });
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

module.exports = router;