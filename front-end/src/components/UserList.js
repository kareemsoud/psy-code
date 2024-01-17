import React from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../services/userService';
import { List, Avatar, Spin } from 'antd';

const UserList = () => {
  const { data: users, error, isLoading } = useQuery('users', getUsers);

  const listStyle = {
    height: '400px', 
    overflow: 'auto',
  };

  if (isLoading) return <Spin />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      style={listStyle} 
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon="user" />}
            title={user.name}
            description={
              <>
                <div>{user.email}</div>
                {user.phone && <div>Phone: {user.phone}</div>}
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default UserList;
