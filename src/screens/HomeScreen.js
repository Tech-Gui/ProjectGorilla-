import axios from "axios";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function HomeScreen() {
  const [users, setUsers] = useState(null);
  const [stores, setStores] = useState(null);
  const [showUsers, setShowUsers] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const [deleId, setDeleId] = useState(null);

  const handleListUsers = async () => {
    try {
      const results = await axios.get("http://10.0.0.45:5000/api/get-users", {
        headers: {
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
        },
      });
      setUsers(results.data);
      setShowUsers(showUsers == false);

      console.log(results.data);
    } catch (err) {}
  };

  const handleListStores = async () => {
    try {
      const results = await axios.get("http://10.0.0.45:5000/api/get-stores", {
        headers: {
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
        },
      });
      setStores(results.data);
      setShowStores(showStores === false);
      console.log(results);
    } catch (err) {}
  };

  const deleteStoreHandler = async (id) => {
    try {
      const results = await axios.post(
        `http://10.0.0.45:5000/api/delete-user`,
        { user_id: id },
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(results.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      const results = await axios.post(
        `http://10.0.0.45:5000/api/delete-user`,
        { user_id: id },
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(results.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container style={{ marginTop: "5%", marginBottom: "10%", width: "50%" }}>
      <Table striped bordered hover>
        <thead
          style={{
            backgroundColor: "#13C15A",
            color: "#19234D",
          }}
        >
          <tr>
            <th colSpan={3} style={{ fontWeight: "light" }}>
              Summary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={1}>Users</td>
            <td>2</td>
            <td>
              <Button
                style={{
                  paddingTop: "0.01rem",
                  paddingBottom: "0.01rem",
                  borderRadius: "1px",
                  backgroundColor: "#19234D",
                  borderColor: "#19234D",
                }}
                onClick={handleListUsers}
              >
                {showUsers ? "Hide" : "List"}
              </Button>
            </td>
          </tr>
          <tr>
            <td>Stores</td>
            <td>5</td>
            <td>
              <Button
                style={{
                  paddingTop: "0.01rem",
                  paddingBottom: "0.01rem",
                  borderRadius: "1px",
                  backgroundColor: "#13C15A",
                  borderColor: "#13C15A",
                }}
                onClick={handleListStores}
              >
                {showStores ? "Hide" : "List"}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      {users && showUsers ? (
        <Table
          striped
          bordered
          hover
          style={{ marginTop: "10%", marginBottom: "10%" }}
        >
          <thead
            style={{
              backgroundColor: "#13C15A",
              color: "#19234D",
            }}
          >
            <tr>
              <th style={{ fontWeight: "light" }}>ID</th>
              <th style={{ fontWeight: "light" }}>Username</th>
              <th style={{ fontWeight: "light" }}>Email</th>
              <th style={{ fontWeight: "light" }}>Role</th>
              <th style={{ fontWeight: "light" }}>Status</th>
              <th style={{ fontWeight: "light" }}>Edit</th>
              <th style={{ fontWeight: "light" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.blocked}</td>
                <td>
                  <i className="bx bx-edit-alt"></i>
                </td>
                <td>
                  <Button
                    variant="light"
                    style={{
                      padding: "0px",
                      backgroundColor: "trans",
                      color: "#19234D",
                      border: "none",
                    }}
                    onClick={() => deleteUserHandler(user.id)}
                  >
                    <i className="bx bx-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div></div>
      )}

      {stores && showStores ? (
        <Table
          striped
          bordered
          hover
          style={{ marginTop: "5%", marginBottom: "10%" }}
        >
          <thead
            style={{
              backgroundColor: "#13C15A",
              color: "#19234D",
            }}
          >
            <tr>
              <th style={{ fontWeight: "light" }}>ID</th>
              <th style={{ fontWeight: "light" }}>Description</th>
              <th style={{ fontWeight: "light" }}>Province</th>
              <th style={{ fontWeight: "light" }}>View</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.id}>
                <td>{store.id}</td>
                <td>{store.description}</td>
                <td>{store.province}</td>

                <td>
                  <Button
                    variant="light"
                    style={{
                      padding: "0px",
                      backgroundColor: "none",
                      color: "#19234D",
                      border: "none",
                    }}
                    onClick={() => viewStoreHandler(store.id)}
                  >
                    <i className="bx bxs-bullseye"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div></div>
      )}
    </Container>
  );
}
