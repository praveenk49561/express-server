/*
|--------------------------------------------------------------------------
| Login Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| POST      /api/login
| 
*/

const express = require('express');
const { loginAuth } = require('../Controllers/Login');
const router = express.Router();

// METHOD  : POST
// ROUTE   : /api/login
// FUNCTION: Check 
router.post('/', loginAuth);

module.exports = router;