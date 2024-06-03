import React, {useContext} from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button } from './styles/Button';
import { AppContext, useGlobalContext } from '../context';


function HeroSection() {    // either use props then props.  or {{name,image,content}}
  
  const {name,image,content,btnContent,heading}=useGlobalContext();
  
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">{heading}</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>{content}</p>
                <Button className='tn hireme-btn'>
                  <NavLink to='/contact'>{btnContent}</NavLink>
                </Button>
            </div>
            
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src={image} className='hero-img' />
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: captalize;
    font-weight: 800;
    font-size: 2rem;
    color: #6366F1;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.2rem;
    color: #333333;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    .grid{
      gap: 3.2rem;
    }
    .section-hero-data{
      margin-left: 3rem;
    }
  }
`;
export default HeroSection
