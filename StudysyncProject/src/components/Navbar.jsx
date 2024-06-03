import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout,user} = useAuth0();
  const [open, setOpen] = useState(false);
  
  const handleLogin = () => {
    loginWithRedirect();
  };

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      position: relative;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 2rem;
            text-transform: uppercase;
            color: #718096;
            transition: color 0.3s linear;
            font-weight:600;
          }

          &:hover,
          &:active {
            color: #2563eb;
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    .button{
      position: absolute;
      right: 1px;
      top: 38px;
      margin-left: 5rem;
      padding: 0.9rem 1.6rem;
      font-size: 1.4rem;
      color: #fff;
      background-color: #2563eb;
    }
    .button-tag{
      margin-top: 5rem;
      font-size: 1.8rem;
      color:#718096;
      font-weight: 600;
      border : 1px solid #718096;
      padding: 0.5rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .button-tag:hover{
      color: #2563eb;
      border: 1px solid #2563eb;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
              font-weight:700;
              width: 90%;
              color: ${({ theme }) => theme.colors.black};
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
              background: black;
              border-radius: 10px;
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        background-color: ${({ theme }) => theme.colors.bg};
        position: fixed;
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
       
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              Contact
            </NavLink>
          </li>
          { open &&
          <li>
            <span className="button-tag" onClick={()=>setOpenMenu(!openMenu)}>LogOut</span>
            {openMenu &&<li>
                <button className="button" onClick={() => logout({logoutParams:{ returnTo: window.location.origin }})}>
                  Log Out
                </button>
            </li>}
          </li>}
          <li>
            <span className="button-tag" onClick={()=>setOpenMenu(!openMenu)}>LogOut</span>
            {openMenu &&<li>
                <button className="button" onClick={handleLogin}>
                  Log In
                </button>
            </li>}
          </li>
          
          {/* <li className="button2" onClick={(e) => e.target.style.background = "red" }>
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
          </li> */}
            
            
        </ul>

        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;