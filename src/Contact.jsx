import React from 'react'
import styled from "styled-components"

function Contact() {

  const Wrapper =styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
    `;


  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free to Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.383270615307!2d77.09005124866962!3d28.67817948436166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047295401031%3A0x60e4ee3345351b47!2sEkta%20Enclave%2C%20Peeragarhi%20Village%2C%20Paschim%20Vihar%2C%20Delhi%2C%20110087!5e0!3m2!1sen!2sin!4v1716863008810!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xnqeywev" method="POST" className='contact-inputs'>
            <input type="text" name='Username' placeholder='Username' autoComplete='off' required />

            <input type="email" name='Email' placeholder='Email' autoComplete='off' required />

            <textarea name="message" placeholder='Message' cols="30" rows="6" autoComplete='off' required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
