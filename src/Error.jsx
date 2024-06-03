import React from 'react'
import styled from 'styled-components'
import { Button } from './components/styles/Button';
import { NavLink } from 'react-router-dom';
import Home from './Home';

const Error = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;
export default Error
