import React from "react";

const UserRow = ({ user, index }) => {
  const { firstName, lastName, email } = user;
  return (
    <tr>
      <td> {index + 1} </td>
      <td> {firstName} </td>
      <td> {lastName} </td>
      <td> {email} </td>
    </tr>
  );
};

export default UserRow;
