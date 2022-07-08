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
const { getAllProjects } = require('../Controllers/Projects');
const router = express.Router();

// METHOD  : GET
// ROUTE   : /api/projects
// FUNCTION: Check 
router.get('/', getAllProjects);

module.exports = router;