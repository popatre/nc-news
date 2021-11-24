import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import FaceIcon from "@mui/icons-material/Face";

export default function NavbarComp() {
    const { user } = useContext(UserContext);

    return (
        <nav>
            <Navbar bg="warning" expand="lg">
                <Navbar.Brand>
                    <Link to="/" className="Nav__link">
                        NC News <i className="fas fa-globe-americas fa-2x"></i>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className="ms-auto"
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                {/* <Nav.Link eventKey="createTopic"> */}
                                <Link to="/newTopic" className="Nav__link">
                                    Add a topic
                                </Link>
                                {/* </Nav.Link> */}
                            </Nav.Item>
                            {!!user.username ? (
                                <Nav.Item>
                                    <Link to="/account" className="Nav__link">
                                        <img
                                            className="Navbar__avatar"
                                            src={user.avatar_url}
                                            alt={user.name}
                                        />
                                    </Link>
                                    <p>{user.username}</p>
                                </Nav.Item>
                            ) : (
                                <Nav.Item>
                                    <Link to="/account" className="Nav__link">
                                        <FaceIcon />
                                        <p>Sign in</p>
                                    </Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}
