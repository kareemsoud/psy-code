const UserService = require('../services/userService');
const mockUsers = [
  { email: 'test.e1@example.com', name: 'John Doe', phone: '123-456-7890' },
  { email: 'test.e2@example.com', name: 'Jane Doe', phone: '' },
];
  function initializeUsers(session) {
  if (!session.users) {
    console.log('Initializing session with mock data');
    session.users = [...mockUsers];
  }
  
}
exports.addUser = (req, res) => {
  try {
    initializeUsers(req.session); 
    const newUser = UserService.addUser(req.session, req.body);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }


};

exports.getAllUsers = (req, res) => {
  try {
    initializeUsers(req.session); 

    const users = UserService.getAllUsers(req.session);
    res.status(200).json(users);
  
    
  } catch (error) {
    res.status(500).json({ message: error.message });

  }

};
