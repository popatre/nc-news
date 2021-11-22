import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function NavbarComp() {
    return (
        <nav>
            <Navbar bg="warning" expand="lg">
                <Navbar.Brand>
                    <Link to="/" className="Nav__link">
                        NC News <i class="fas fa-globe-americas fa-2x"></i>
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
                                <Nav.Link eventKey="createTopic">
                                    <Link to="/newTopic" className="Nav__link">
                                        Add a topic
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="account">
                                    <Link to="/account" className="Nav__link">
                                        Account
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}
