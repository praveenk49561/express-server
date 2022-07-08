/*
|--------------------------------------------------------------------------
| Users Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| GET       /api/users/
| GET       /api/users/:id
| POST      /api/users/
| PUT       /api/users/:id
| DELETE    /api/users/:id
|
| 
*/

const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../Controllers/Users');

// METHOD  : GET
// ROUTE   : /api/users/
// FUNCTION: Provide All Available User
router.get('/', getAllUsers);

// METHOD  : GET
// ROUTE   : /api/users/:id
// FUNCTION: Provide Requested User
router.get('/:id', getUser);

// METHOD  : POST
// ROUTE   : /api/users/:id
// FUNCTION: Creates An User
router.post('/', createUser);

// METHOD  : PUT
// ROUTE   : /api/users/:id
// FUNCTION: Updates An User
router.put('/:id', updateUser);

// METHOD  : POST
// ROUTE   : /api/users/
// FUNCTION: Deletes An User
router.delete('/:id', deleteUser);

module.exports = router;