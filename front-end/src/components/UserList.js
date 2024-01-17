import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../services/userService';
import { List, Avatar } from 'antd';

const UserList = () => {
  const { data: users } = useQuery('users', getUsers, { suspense: true });

  const listStyle = {
    height: '400px',
    overflow: 'auto',
  };

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

function App() {
  return (
    <Suspense fallback={<div>Loading users...</div>}>
      <UserList />
    </Suspense>
  );
}

export default App;
