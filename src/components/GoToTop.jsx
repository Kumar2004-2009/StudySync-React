import React, { useEffect } from 'react'
import styled from 'styled-components'
import {FaArrowUp} from 'react-icons/fa'
const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    };

    const listenScroll = () => {
        if (window.scrollY > 250) {
            document.querySelector('.top-btn').style.display = 'flex'
        } else {
            document.querySelector('.top-btn').style.display = 'none'
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",listenScroll);
        
    }, [])
  return (
    <Wrapper>
        <div className='top-btn' onClick={goToBtn}>
            <FaArrowUp className='top-btn--icon'/>
        </div>
    </Wrapper>
  )
}

const Wrapper =styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;

  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 42%;
    }
  }
`;
export default GoToTop
