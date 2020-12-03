import React from "react";

const Leaderboard = ({ users, currentUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => (
            <tr key={user.id}>
              <td>{++index}</td>
              {currentUser && currentUser === user.id ? (
                <td>
                  <a>{user.username}</a>
                </td>
              ) : (
                <td>{user.username}</td>
              )}
              <td>{user.score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
