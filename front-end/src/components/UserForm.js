<<<<<<< HEAD
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addUser } from '../services/userService';
import { Form, Input, Button, message } from 'antd';
import {  isMobilePhone } from 'validator'; 

const UserForm = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      message.success('User added successfully');
      form.resetFields();
      
    },
    onError: (error) => {
      message.error('Error adding user');
    },
  });

  const handleSubmit = (values) => {
    addUserMutation.mutate(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Please enter a valid email!' },
      ]}
    >
      <Input placeholder="Enter your email" />
    </Form.Item>
    <Form.Item
      name="name"
      label="Name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input placeholder="Enter your name" />
    </Form.Item>
    <Form.Item
      name="phone"
      label="Phone"
      rules={[
        {
          required: false,
          validator: async (_, value) =>
            !value || isMobilePhone(value, 'any', { strictMode: false })
              ? Promise.resolve()
              : Promise.reject(new Error('Please enter a valid phone number!')),
        },
      ]}
    >
      <Input placeholder="Enter your phone (optional)" />
    </Form.Item>
    <Button type="primary" htmlType="submit" loading={addUserMutation.isLoading}>
      Add User
    </Button>
  </Form>
  );
};

export default UserForm;
=======
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addUser } from '../services/userService';
import { Form, Input, Button, message } from 'antd';
import {  isMobilePhone } from 'validator'; 

const UserForm = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      message.success('User added successfully');
      form.resetFields();
      
    },
    onError: (error) => {
      message.error('Error adding user');
    },
  });

  const handleSubmit = (values) => {
    addUserMutation.mutate(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Please enter a valid email!' },
      ]}
    >
      <Input placeholder="Enter your email" />
    </Form.Item>
    <Form.Item
      name="name"
      label="Name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input placeholder="Enter your name" />
    </Form.Item>
    <Form.Item
      name="phone"
      label="Phone"
      rules={[
        {
          required: false,
          validator: async (_, value) =>
            !value || isMobilePhone(value, 'any', { strictMode: false })
              ? Promise.resolve()
              : Promise.reject(new Error('Please enter a valid phone number!')),
        },
      ]}
    >
      <Input placeholder="Enter your phone (optional)" />
    </Form.Item>
    <Button type="primary" htmlType="submit" loading={addUserMutation.isLoading}>
      Add User
    </Button>
  </Form>
  );
};

export default UserForm;
>>>>>>> e397c5d81d34f078ae98d6a7f8f717395595ad15
