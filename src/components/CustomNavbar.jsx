import { useContext, useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import userContext from '../context/userContext';

const CustomNavbar = () => {
  const userContextData = useContext(userContext);
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false,
      });
      navigate('/');
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-5">
        <NavbarBrand tag={ReactLink} to="/">
          MyBlogs
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/user/dashboard">
                Add Post
              </NavLink>
            </NavItem>

            {/* add external link */}
            <NavItem>
              <NavLink
                href="http://localhost:5080/filterblog"
                target="_self"
                rel="noreferrer"
              >
                Filter Content
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://localhost:5080/generate"
                target="_self"
                rel="noreferrer"
              >
                Generate Blog content
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to={`/user/profile-info/${user.id}`}>
                    Profile Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">
                    {user.email}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
