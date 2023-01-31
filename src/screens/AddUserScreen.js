import { Card, Container, Form, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUserScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [confirmEmail, setConfirmEmail] = useState(" ");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      // toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://10.0.0.45:5000/api/add-user",
        {
          username,
          email,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTA4MjU5NywianRpIjoiYmNiNmNlMTItNmI2YS00MGU2LTk5NzctMjY2YjFkNDY0OGI0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjc1MDgyNTk3LCJleHAiOjE2Nzc2NzQ1OTd9.lZS6c_FEVSZ_QNgN1R4UZxh4DMHL_HpS8o_mt9tmuYg",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        marginTop: "10%",
      }}
    >
      <Card style={{ width: "24rem" }}>
        <Card.Header
          style={{
            backgroundColor: "#19234D",
            color: "#13C15A",
          }}
        >
          <h5>Enter User Details</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 mt-3" controlId="username">
              <Form.Control
                className="addUser"
                type="username"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="addUser"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Control
                className="addUser"
                type="email"
                placeholder="Cornfirm Email"
                required
                onChange={(e) => setConfirmEmail(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mb-3"
              style={{
                backgroundColor: "#13C15A",
                color: "#19234D",
                width: "40%",
                borderRadius: "50px",
                borderColor: "#13C15A",
              }}
            >
              <i className="bx bx-user-plus"></i> ADD
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
