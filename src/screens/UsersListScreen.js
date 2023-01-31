import axios from "axios";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);

  const handleListUser = async () => {
    try {
      const results = await axios.get("http://10.0.0.45:5000/api/get-users", {
        headers: {
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
        },
      });

      console.log(results);
      setUsers(response.data);
    } catch (err) {}


  };

  return (
    <Container style={{ marginTop: "20%" }}>
      <Table striped bordered hover>
        <thead
          style={{
            backgroundColor: "#13C15A",
            color: "#19234D",
          }}
        >
          <tr>
            <th colSpan={3} style={{ fontWeight: "light" }}>
              First Name
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
                onClick={handleListUser}
              >
                List
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
              >
                List
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <h2>{users.username}</h2>
    </Container>
  );
}
