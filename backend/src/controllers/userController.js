const UserService = require('../services/userService');

exports.addUser = (req, res) => {
  try {
    UserService.initializeUsers(req.session); 
    const newUser = UserService.addUser(req.session, req.body);
    res.set('Cache-Control', 'no-store');

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }


};

exports.getAllUsers = (req, res) => {
  UserService.initializeUsers(req.session); 
  res.set('Cache-Control', 'no-store');

  const users = UserService.getAllUsers(req.session);
  res.status(200).json(users);



};
