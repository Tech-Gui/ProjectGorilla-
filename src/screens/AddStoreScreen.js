import { Card, Container, Form, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddStoreScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [store, setStore] = useState({
    description: "description",
    address: "address",
    city: "city",
    province: "province",
    postal_code: "postal_code",
    contact_person: "contact_person",
    contact_number: "contact_number",
    email: "email",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://10.0.0.45:5000/api/add-store",
        {
          description: store.description,
          address: store.address,
          city: store.city,
          province: store.province,
          postal_code: store.postal_code,
          contact_person: store.contact_person,
          contact_number: store.contact_number,
          email: store.email,
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
          <h5>Enter Store Details</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 mt-3" controlId="description">
              <Form.Control
                className="addUser"
                type="textarea"
                placeholder="Description"
                required
                onChange={(e) =>
                  setStore({ ...store, description: e.target.value })
                }
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="address">
              <Form.Control
                className="addUser"
                type="textarea"
                placeholder="Address"
                required
                onChange={(e) =>
                  setStore({ ...store, address: e.target.value })
                }
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="province">
              <Form.Control
                className="addUser"
                type="textarea"
                placeholder="Province"
                required
                onChange={(e) =>
                  setStore({ ...store, province: e.target.value })
                }
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="postal_code">
              <Form.Control
                className="addUser"
                type="textarea"
                placeholder="Postal Code"
                required
                onChange={(e) =>
                  setStore({ ...store, postal_code: e.target.value })
                }
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="contact_person">
              <Form.Control
                className="addUser"
                type="text"
                placeholder="Contact Person"
                required
                onChange={(e) =>
                  setStore({ ...store, contact_person: e.target.value })
                }
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#19234D",
                  fontSize: "0.9em",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="contact_number">
              <Form.Control
                className="addUser"
                type="text"
                placeholder="Contact Number"
                required
                onChange={(e) =>
                  setStore({ ...store, contact_number: e.target.value })
                }
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
                onChange={(e) => setStore({ ...store, email: e.target.value })}
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
              <i className="bx bx-layer-plus"></i> ADD
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
