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
            <Navbar bg="warning" expand="lg" className="nav__container">
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
                        <Nav className="justify-content-end nav__links">
                            {/* <Nav.Item>
                                
                                <Link to="/newTopic" className="Nav__link">
                                    Add a topic
                                </Link>
                        
                            </Nav.Item> */}
                            {!!user.username ? (
                                <Nav.Item>
                                    <Link
                                        to="/account"
                                        className="Nav__link--signedin"
                                    >
                                        <p>{user.username}</p>
                                        <img
                                            className="Navbar__avatar"
                                            src={user.avatar_url}
                                            alt={user.name}
                                        />
                                    </Link>
                                </Nav.Item>
                            ) : (
                                <Nav.Item>
                                    <Link
                                        to="/account"
                                        className="Nav__link--signin"
                                    >
                                        <p>Sign in</p>
                                        <FaceIcon className="Nav__link--signin__icon" />
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
