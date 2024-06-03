import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Contact from './Contact'
import Service from './Service';
import styled from 'styled-components';

function Home() {

  const { updateHomePage } =useGlobalContext();

  useEffect(()=>updateHomePage(),[])
  // const data={
    // name:"Code to Inspire ,Create to Transform",
    // image:"./images/hero.svg",
    // content:"Elevate your programming skills, solve challenges and unlock the world of coding possibilites"
  // }
  return (
    <div>
      <>
      <HeroSection/>
      <Wrapper>
      <div class="company-container">
        <h2 class="company-title">Trusted by the best</h2>
        <div class="company-grid">

            <div class="company-logo">
                <img  src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-gris.png" class="svg-img"/>
                <span class="logo-txt">Google</span>
            </div>

            <div class="company-logo">
                <img  src="https://cdn.icon-icons.com/icons2/2407/PNG/512/microsoft_icon_146144.png" class="svg-img"/>
                <span class="logo-txt">Microsoft</span>
            </div>

            <div class="company-logo">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HIfMu1JrdU5sHrLrj-zT7AOwTDuL1XFQFA&s" class="svg-img"/>
                <span class="logo-txt">Linkedin</span>
            </div>

            <div class="company-logo">
                <img  src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-square-black-button-with-a-white-square-on-it-vector-png-image_6953616.png" class="svg-img"/>
                <span class="logo-txt">VectorEdu</span>
            </div>

        </div>
      </div>

      <div class="feature-container">
        <div class="feature-content">
            <div class="main-info">
                <h2 class="main-title">
                    Our competitive advantage
                </h2>
                <p class="main-description">
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of real written text but is random or otherwise generated.
                </p>
            </div>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://plnproject.org/wp-content/uploads/2021/08/1a-1.png"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Personalized Learning
                        </div>
                        <div class="feature-description">
                            Offer tailored learning experiences through AI and machine learning to cater to individual student needs.
                        </div>
                    </div>
                </div>
                
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiWTUJyFgQg4pzqzCYLCMaFJEhIwBLV2qhQ&s"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Affordability
                        </div>
                        <div class="feature-description">
                            Provide high-quality education at an affordable price point, making it accessible to a broader audience.
                        </div>
                    </div>
                </div>
                
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGP5losKnxdHpZmDpnu0qrY58c9GvPgCi4A&s"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Industry Partnerships
                        </div>
                        <div class="feature-description">
                            Collaborate with well-known companies and institutions to offer accredited courses and certifications, adding credibility to your offerings.
                        </div>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://cdn-icons-png.freepik.com/512/8099/8099738.png"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Innovative Technology
                        </div>
                        <div class="feature-description">
                            Utilize cutting-edge technology, such as augmented reality or virtual reality, to create immersive learning experiences.
                        </div>
                    </div>
                </div>
                
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171132674/89523708-tech-support-icon-isolated-on-special-green-round-button-abstract-illustration.jpg"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Responsive Support
                        </div>
                        <div class="feature-description">
                            Provide exceptional customer support and assistance to students and educators.
                        </div>
                    </div>
                </div>
              
                <div class="feature-card">
                    <div class="icon-container">
                        <img class="feature-svg" src="https://cdn-icons-png.flaticon.com/512/7270/7270513.png"/>
                    </div>
                    <div class="feature-info">
                        <div class="feature-title">
                            Analytics and Insights
                        </div>
                        <div class="feature-description">
                            Offer detailed progress tracking and analytics to help students and teachers monitor performance and make data-driven decisions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </Wrapper>
      
      <Service/>
      <Contact/>
      </>
      
    </div>
  )
}
const Wrapper= styled.section`
.feature-container{
  margin-top:5rem;
  background-color: #f0f0f0;
  padding: 2.5rem 0;
  text-align: center;
  margin-bottom: 8rem;
}

.feature-content{
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-info{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-title{
  font-size: 3.2rem;
  font-weight: bold;
}

.main-description{
  color: var(--gray);
  font-size: 1.7rem;
}

.feature-grid{
  display: grid;
 
  grid-template-columns: repeat(2,1fr);
  grid-gap: 2rem;
  margin-top: 1.3rem;
}

.feature-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6d7890;
  padding: 1.6rem;
  border-radius: 1rem;
  gap: 1rem;
}
.feature-info{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.icon-container{
  background-color: #ffffff;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;  
  justify-content: center;
  align-items: center;
}

.feature-svg{
  width: 3.5rem;
  height: 3.5rem;
}

.feature-title{
  color: white;
  font-weight: bold;
  font-size: 2.3rem;
}

.feature-description{
  color: white;
  font-size:1.5rem;
}

.feature-card:nth-child(1){
  background-color: #4a90e2;
}

.feature-card:nth-child(2){
  background-color: #FF6289;
}

.feature-card:nth-child(3){
  background-color: #fcbf58;
}

.feature-card:nth-child(4){
  background-color: #44bfc3;
}

.feature-card:nth-child(5){
  background-color: #77b05d;
}

.feature-card:nth-child(6){
  background-color: #7d78b1;
}

@media screen and (max-width:768px) {
  .feature-grid{
      grid-template-columns: repeat(1,1fr);
  }
}



.company-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  animation: slideFromLeft 1s ease forwards;
}

.company-grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 3.6rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.625rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1.8rem 2.5rem;
}

.company-logo{
  font-size: 3rem;
  font-weight: 500;
  color: #808080;
  display: flex;
  gap: 0.5rem;
}

.svg-img{
  height: 3.56rem;
}

.logo-txt{
  font-size: 2.8rem;
}

@media screen and (min-width:640px) {
  .company-grid{
      grid-template-columns: repeat(4,1fr);
  }
  .company-title{
      font-size: 3.8rem;
      font-weight: bold;
  }
}
`;

export default Home
