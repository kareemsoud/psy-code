import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>User Registration</h1>
        <UserForm />
        <h2>Registered Users</h2>
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
