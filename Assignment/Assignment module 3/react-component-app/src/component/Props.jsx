import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{margin:20, padding:10, backgroundColor:'pink'}}>
      Props Example
      <h2>User Profile</h2>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};


const Props = () => {
  const user1 = {
    username: 'ishita123',
    email: 'ishita@example.com',
    age: 28
  };

  const user2 = {
    username: 'vishu456',
    email: 'vishu@example.com',
    age: 35
  };

  return (
    <div>
      <UserProfile username={user1.username} email={user1.email} age={user1.age} />
      <UserProfile username={user2.username} email={user2.email} age={user2.age} />
    </div>
  );
};

export default Props;
