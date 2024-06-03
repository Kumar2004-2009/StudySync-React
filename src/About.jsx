import React, {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';

function About() {
  // const data={
  //   name: "Kumar Piyush",
  //   image: "./images/about1.svg",
  //   content: "I'm an undergraduate student from NSIT specialized in Information Technology. Along with my degree I've completed Java,HTML and Frontend Courses online.My Goal is to leverage my Java expertise to contribute meaningfully to innovative projects and to build a succesful career as a Full Stack Developer.Eager to collaborate and grow within the ever-evolving landscape of Java development."
  // }


  const { updateAboutPage } =useGlobalContext();

  useEffect(() => updateAboutPage(),[])

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
