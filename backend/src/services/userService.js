const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

class UserService {
  static addUser(session, userData) {
    if (!userData.email || !userData.name) {
      logger.error('Email and Name validation failed', { userData });
      throw new Error('Email and Name are required');
    }
    if (session.users.some(user => user.email === userData.email)) {
      logger.error('Email uniqueness validation failed', { userData });
      throw new Error('Email already exists');
    }
    const newUser = { ...userData, phone: userData.phone || '' };
    session.users.push(newUser);
    logger.info('Added new user', { newUser });
    return newUser;
  }

  static getAllUsers(session) {
    logger.info('Retrieved all users');
    return session.users;
  }
}

module.exports = UserService;
