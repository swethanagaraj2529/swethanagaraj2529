import React from 'react';
import back from'./background.jpg';
import quiz from './quiz.png';
import Quiz from './orl.jpeg';
import pic from './phot.jpg'


export default class College extends React.Component {


  render() {
 const bg={
  backgroundImage:`url('${back}')`,
  height:'400vh',
  marginTop:'-20px',
  backgroundSize:'cover',
  backgroundRepeat:'no repeat'
 };
 
 
 return(
  <div style={bg}>
    <h3 className='collegeName'> SRI ACHIEVERS INSTITUTE OF ENGINEERING AND TECHNOLOGY</h3>
    <div className='bor'></div>
    <div> 
      <button className='but'>Back</button>
      <button className='home'>Home</button>
      <button className='Quiz'>Quiz</button>
      
     
    </div>
    <div>
    <img src= {quiz} alt="quiz" className='quiz'></img>
         </div>
      <h2 className='para'></h2>
<h4 className='wording'>Quiz is a game or 
competition in which someone 
tests your knowledge by asking
 you questions. We'll have a quiz
  at the end of the show.
   Synonyms: competition, test,
    quiz show, panel game More
     Synonyms of quiz.</h4>


<img src= {Quiz} alt="quizz" className='Quizz'></img>
<h3 className='box'></h3> 
<h2 className='techhead'>Technical Quiz</h2>
<h1 className='sent'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.
 They can also be televised for entertainment purposes, often in a game show format</h1>
<h4 className='orall'>Speed!! Speed!! Speed!! Battle of Brains is a Technical Quiz game of questions and answers on all topics of TECHNICAL knowledge that is played by technical students. The game is typically played with a lockout buzzer s ystem between some numbers of tea ms, most commonly teams of two players each. A moderator reads questions to the teams, whose players endeavor to buzz in first with the correct answer, scoring points for their team
</h4>
<div>
    <img src= {pic} alt="pic" className='pic'></img>
         </div>
     </div>
     
     
 )
 }
}


  

    
    


