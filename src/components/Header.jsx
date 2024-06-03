import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

function Header() {
  return (
    <MainHeader>
      <div className='flex gap-6'>
        <img src="./images/StudySyn.svg" alt="" className=' h-12 mt-1' />
        <h2 className='text-5xl font-bold'>StudySync</h2>
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8.5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  .logo {
    height: 5rem;
    width: 18rem;
  }
`;
export default Header
