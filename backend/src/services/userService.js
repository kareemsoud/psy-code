const mockUsers = [
    { email: 'test.e1@example.com', name: 'John Doe', phone: '123-456-7890' },
    { email: 'test.e2@example.com', name: 'Jane Doe', phone: '' },
  ];
  
  class UserService {
    static initializeUsers(session) {
      if (!session.users) {
        console.log('Initializing session with mock data');
        session.users = [...mockUsers];
      }
      
    }
  
    static addUser(session, userData) {
      if (!userData.email || !userData.name) {
        throw new Error('Email and Name are required');
      }
      if (session.users.some(user => user.email === userData.email)) {
        throw new Error('Email already exists');
      }
      const newUser = { ...userData, phone: userData.phone || '' };
      session.users.push(newUser);

      return newUser;
    }
  
    static getAllUsers(session) {

      return session.users;
    }
  }
  
  module.exports = UserService;
  