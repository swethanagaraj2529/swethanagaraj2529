import React from 'react';
import back from'./component/background.jpg';

export default class College extends React.Component {


  render() {
 const bg={
  backgroundImage:`url('${back}')`,
  height:'100vh',
  marginTop:'-20px',
  backgroundSize:'cover',
  backgroundRepeat:'no repeat'
 };
 return(
  <div style={bg}>

  </div>
 )
  }
}
    
    


