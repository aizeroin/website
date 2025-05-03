import { useLocation, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
} from 'react-bootstrap';
import { useState } from 'react'; // Add this import
import AILogo from '../../assets/aiz1.png';
import './index.css';

const Header = () => {
  const location = useLocation();
  // Add state to track navbar expansion
  const [expanded, setExpanded] = useState(false);

  const isActive = (path) => location.pathname === path;
  
  // Function to close navbar on link click
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="lg" sticky="top" className='Header' expanded={expanded} onToggle={setExpanded}>
      <Container className="px-4">
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <Image src={AILogo} width={180} alt="AIZero Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto align-items-left">
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''} onClick={closeNavbar}>
              Home
            </Nav.Link>
            {/* Services Dropdown with Main Link */}
            <div className="d-flex nav-item">
              <Nav.Link
                as={Link}
                to="/services"
                className={`nav-link pe-0 ${isActive('/services') ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Services
              </Nav.Link>
              <NavDropdown
                title={<span className="dropdown-toggle-icon" />}
                id="navbarDropdown"
                className="dropdown-toggle-split p-0"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/services/technology-advisory" active={isActive('/services/technology-advisory')} onClick={closeNavbar}>
                  Technology Advisory
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/cloud-consulting-and-migration" active={isActive('/services/cloud-consulting-and-migration')} onClick={closeNavbar}>
                  Cloud Consulting and Migration
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/infrastructure-management" active={isActive('/services/infrastructure-management')} onClick={closeNavbar}>
                  Infrastructure Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/digital-modernization" active={isActive('/services/digital-modernization')} onClick={closeNavbar}>
                  Digital Modernization
                </NavDropdown.Item>
              
                <NavDropdown.Item as={Link} to="/services/managed-it-services" active={isActive('/services/managed-it-services')} onClick={closeNavbar}>
                  Managed IT Services
                </NavDropdown.Item>
                
                <NavDropdown.Item as={Link} to="/services/ai-automation" active={isActive('/services/cloud-consulting-and-migration')} onClick={closeNavbar}>
                  Ai Automation
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            
            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeNavbar}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;