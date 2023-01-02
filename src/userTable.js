import React from "react";
const UserTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>last Name</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        {data.map((users, key) => (
          <tr key={key}>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>{users.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserTable;
