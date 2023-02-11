import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import UserRow from "./UserRow";

const Dashboard = () => {
  const URL = "http://localhost:5000/api/user";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(URL);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return <UserRow user={user} key={user.id} index={index} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;
