const request = require('supertest');
const express = require('express');
const userRouter = require('../routes/userRoutes');
const UserService = require('../services/userService');

jest.mock('../services/userService');

const app = express();
app.use(express.json());
app.use('/api/users', userRouter);

describe('User Controller', () => {
  beforeEach(() => {
    UserService.initializeUsers.mockReset();
    UserService.addUser.mockReset();
    UserService.getAllUsers.mockReset();
  });

  it('should add a new user', async () => {
    const mockUser = { email: 'test@example.com', name: 'Test User' };
    UserService.addUser.mockReturnValue(mockUser);

    const res = await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(res.body).toEqual(mockUser);
    expect(UserService.addUser).toHaveBeenCalledWith(undefined, mockUser);
});

  it('should get all users', async () => {
    const mockUsers = [{ email: 'test@example.com', name: 'Test User' }];
    UserService.getAllUsers.mockReturnValue(mockUsers);

    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual(mockUsers);
    expect(UserService.getAllUsers).toHaveBeenCalled();
  });

});
