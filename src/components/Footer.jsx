import React from 'react'
import styled from 'styled-components'
import {Button} from './styles/Button'
import {NavLink} from 'react-router-dom'
import { FaGithub,FaDiscord,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to='/'>
              <Button className='text-2xl'>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>


      {/* footer section */}
      <footer>
        <div className=" container2 container grid grid-four-column ">
          <div className="footer-about">
            <h3 className='name'>CODEA</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, deserunt?</p>
          </div>


          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" className='text-xs' />
            </form>
          </div>


          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaGithub className="icons" />
              </div>
              <div>
                <a
                  href="www.linkedin.com/in/kumar-piyush-1314ba1b9">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} CoddeaTechnical All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper =styled.section`
.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
}
.container2{
  margin-left:28rem
  max-width: 120rem;
}
.contact-short-btn {
  justify-self: end;
  align-self: center;
}
footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .grid2 {
    display: grid;
    gap: 6rem;
  }
  .name{
    font-size: 2.5rem;
    font-weight:bold;
  }
  .footer-social--icons {
    display: flex;
    gap: 2.5rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
  .left{
    margin-top:3rem;
    margin-left: 68rem;
  }

  .footer-bottom--section {
    padding-top: 9rem;
    margin-left: 50rem

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  .footer-bottom--section2{
    padding-top: 0.5rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }

  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
}
`;

export default Footer
