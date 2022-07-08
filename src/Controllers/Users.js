const userModel = require('../Models/Users');

const getAllUsers = async (req, res, next) => {
    try {
      const users = await userModel.find({});
      res.status(200).send({ status: '200', message: 'All Users Retrived Successfully !', data: { users } });
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
      const user = await userModel.findById(req?.params?.id);
      res.status(200).send({ status: '200', message: 'User Retrived Successfully !', data: { user } });
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      res.status(409).send({ status: '409', message: err.message ?? 'Something Went Wrong !' });
    }
}

const createUser = async (req, res, next) => {
    try {
      const user = await userModel.create(req?.body);
      res.status(200).send({ status: '200', message: 'User Created Successfully !', data: { user } });
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      next(err);
    }
}

const updateUser = async (req, res, next) => {
  try {
    const user = await userModel.findByIdAndUpdate(req?.params?.id, req?.body);
    res.status(200).send({ status: '200', message: 'User Updated Successfully !', data: { user } });
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
    next(err);
  }
}

const deleteUser = async (req, res) => {
    try {
      const user = await userModel.findByIdAndRemove(req?.params?.id);
      res.status(200).send({ status: '200', message: 'User Deleted Successfully !', data: { user } });
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
      next(err);
    }
}

module.exports = {
    getAllUsers, getUser, createUser, updateUser, deleteUser
}