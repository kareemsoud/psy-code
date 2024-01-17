const API_URL = 'http://localhost:5000/api/users';

export const getUsers = async () => {
  const response = await fetch(API_URL,{
    credentials: 'include' 

  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const addUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    credentials: 'include' 

  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
