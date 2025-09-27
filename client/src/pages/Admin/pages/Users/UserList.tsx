import React, { useState, useEffect } from "react";

// Dummy user type
type User = {
  id: number;
  name: string;
  email: string;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Dummy fetch
  useEffect(() => {
    const dummyUsers: User[] = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="user-list">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
