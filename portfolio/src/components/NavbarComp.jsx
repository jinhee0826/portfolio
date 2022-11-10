import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { useEffect } from 'react';

function NavbarComp() {
  const [login, setLogin] = useState(true);
  const data = useContext(DataContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    setLogin(data.state.user ? true : false)
  }, [data.state.user])

  const logOut = () => {
    setLogin(false);
    data.action.setUser(null);
    navigate('/');
  }
  return (
    <>
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand>
          <FontAwesomeIcon icon={faShop} 
          // 이거 다른거로 걸어주고 싶은데 안됨 물어봐야함
          /> 
            Wedding
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="dress" className="nav-link">Dress</NavLink>
            {/* 이거 나중에 링크 걸어줘야 함  */}
            <NavLink to="/" className="nav-link">Bouquet</NavLink>
            <NavLink to="/" className="nav-link">Jewlery</NavLink>
          </Nav>
          
        <Navbar.Collapse className="justify-content-end">
          {login ? (<Nav>
            <NavLink className="nav-link" to="/mypage">
              {data.state.user.name}님의 MyPage
            </NavLink>
            <Button    variant="outline-secondary" onClick={logOut}>LogOut</Button>
          </Nav>
          ) : (
            <div>
              <Button   variant="outline-secondary" onClick={()=>{navigate('/loginform')}}>LogIn</Button>
            </div>
          ) }
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default NavbarComp;