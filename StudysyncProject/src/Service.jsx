import React from 'react'
import Card from './Card'
import styled from 'styled-components'

function Service() {
  return (
    <Wrapper>
      <h2 className="common-heading mt-16">Our Services</h2>
      <div className=' card'>
        <div className='card-grid'>
          {/* dta waala format use karo thapa techinacla ki video se dekh kar */}
          <Card name="Digital and Interactive Content:"
          head1="DigitalTextbooks"
          head2="InteractiveEbooks"
          head3="Resources"
          image="https://www.singlegrain.com/wp-content/uploads/2017/09/SG-12-Types-of-Interactive-Content_Why-and-How-to-Use-Them.jpg"/>
             
          <Card
            name="Curriculum Development and Alignment:"
            image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2JWfTWhYoL0S2HseqOV-qnR3HjQ7maF5dtk5zf9HMunaTvfoOTwNwucSUQiq0qrhZVBl_Kt4Qkj4Syj-nkd808O_7mQNXUFOFwJj3ox8nNxQsKjdP_TZOnXbzN4WxYBmuLRKsxDb924w/s16000/KNOWLEDGE-AND-CURRICULUM.png"
            head1="Development"
            head3="EducationalResources"
            head2="LessonPlans"
            
          />
          <Card name="Assessment Tools:"
          image="https://www.proprofs.com/c/wp-content/uploads/2019/04/What-is-Assessment-Tool-1.png"
          head1="FormativeAssessment"
          head2="GradingTools"
          head3="TestCreation"/>

          <Card name="Data Analytics and Reporting:" head1="EducationalReports"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzvhEaV6HSsc8RuJhzsdZT1ozcP0QNDg8XQ&s"
          head2="DataAnalytics"
          head3="StudentPerformance"/>

          <Card name="Collaboration and Communication Platforms:" 
          image="https://study.com/cimages/videopreview/38c5geurtn.jpg"
          head1="CollaborationTools"
          head2="GroupWork"
          head3="DiscussionBoards"/>

          <Card name="Personalized Learning Plans:" head1="TeacherTraining"
          image="https://www.chieflearningofficer.com/wp-content/uploads/2023/02/AdobeStock_565290230.jpeg"
          head2="ProfessionalDevelopment"
          head3="EducationalBestPractices"/>

        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper =styled.section
`
.card{
  margin-left: 33rem;
}
.card-grid{
  display: grid;
  grid-template-columns: repeat(3, 0.25fr);
  grid-gap: 30px;
}
@media (max-width: ${({ theme }) => theme.media.tab}) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
  .card{
    margin-left: 13rem;
    margin-right: 11rem
  }
  
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
  .card{
    margin-left: 10rem;
  }
}
@media (max-width: 500px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
  .card{
    margin-left: 15rem;
  }
}
@media screen and (max-width: 1500px) and (min-width: 998px) {
  .card{
    margin-left: 28rem;
  }
}
`

export default Service
