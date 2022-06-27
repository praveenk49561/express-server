/*
|--------------------------------------------------------------------------
| Auth Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| POST      /api/auth
| 
*/

const express = require('express');
const router = express.Router();

// METHOD  : POST
// ROUTE   : /api/auth
// FUNCTION: Check 
router.post('/', (req, res) => {
  try {
    console.log(req);
    res.status(200).send({ status: '200', message: 'Login Success !' });
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

module.exports = router;