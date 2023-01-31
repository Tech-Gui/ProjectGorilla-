import { Card, Container, Form, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/home";

  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://10.0.0.45:5000/api/login", {
        username,
        password,
      });
      console.log(data);

      navigate(redirect || "/");
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
      <Card style={{ width: "30%" }}>
        <Card.Header
          style={{
            backgroundColor: "#19234D",
            color: "#13C15A",
          }}
        >
          <h5>Sign in</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 mt-5" controlId="username">
              <Form.Control
                type="username"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mb-5"
              style={{
                backgroundColor: "#13C15A",
                color: "#19234D",
                width: "100%",
                borderRadius: "50px",
                borderColor: "#13C15A",
              }}
            >
              login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
