import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import AddUserScreen from "./screens/AddUserScreen";
import AddStoreScreen from "./screens/AddStoreScreen";

function App() {
  return (
    <div className="App">
      <Navbar
        variant="dark"
        style={{
          backgroundColor: "#19234D",
        }}
      >
        <Container className="d-flex justify-content-around">
          <Navbar.Brand
            href="#home"
            style={{
              color: "#13C15A",
              fontSize: "1rem",
              fontWeight: "bold",
              paddingRight: "4rem",
            }}
          >
            Zuse <br /> Store
          </Navbar.Brand>
          <Nav className="d-flex justify-conten-start align-content-center">
            <Nav.Item>
              <InputGroup style={{ marginTop: "0.8rem" }}>
                <Form.Control
                  placeholder="Search For a User or Store"
                  className="search"
                  style={{
                    width: "20rem",
                    borderRadius: "50px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "#13C15A",
                    borderColor: "#13C15A",
                    border: "0px",
                    fontSize: "small",
                  }}
                />
                <InputGroup.Text
                  id="basic-addon2"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    backgroundColor: "#13C15A",
                    borderColor: "#13C15A",
                    border: "0px",
                    marginRight: "3rem",
                  }}
                >
                  <i className="bx bx-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </Nav.Item>

            <Nav.Item
              style={{
                fontSize: "32px",
                color: "#13C15A",
              }}
            >
              <Nav.Link
                href="/addstore"
                style={{
                  fontSize: "32px",
                  color: "#13C15A",
                  marginRight: "4rem",
                }}
              >
                <i className="bx bx-layer-plus"></i>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              style={{
                fontSize: "32px",
                color: "#13C15A",
              }}
            >
              <Nav.Link
                href="/adduser"
                style={{
                  fontSize: "32px",
                  color: "#13C15A",
                }}
              >
                <i className="bx bx-user-plus"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/adduser" element={<AddUserScreen />} />
          <Route path="/addstore" element={<AddStoreScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
