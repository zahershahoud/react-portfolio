import React, { Component } from 'react';
import { Button} from 'react-mdl';



class About extends Component {
  render() {
    return(
      <div className ="about-text">
        <p >
        
        I am a Front-end and Back-end Developer, graduate of Digital Career Institute DCI. <br/><br/>I am providing front-end and back-end development,<br/> producing high quality responsive websites.
        <br/><br/>

         The work I provide is of highest quality and fully responsive.<br/><br/> I take  care to ensure each project is well-developed and  maintainable so you can <br/>enhance a website as your company grows.<br/><br/>

        I'm quietly confident, naturally curious, and perpetually improving my chops.

        </p>
        <a href="resume/Lebenslauf.pdf" rel="noopener noreferrer" target="_blank">

        <Button raised className='about-button'>Download Resume</Button>
         </a>
        </div>

       
    )
  }
}

export default About;
