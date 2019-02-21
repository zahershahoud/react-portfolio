import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="image/avatar.jpg"
                alt="myImage"
                className="avatar-img"

                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Zaher Shahoud</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
            <p>I'm a Front-end and Back-end Developer
               Producing fully responsive websites and exceptional experience.</p>
            <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
            <h5>Address</h5>
            <p>Germany Neuss, 41466</p>
            <h5>Phone</h5>
            <p>00491-5731104578</p>
            <h5>Email</h5>
            <p>zahershahoud.88@gmail.com</p>
            
            <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2011}
              schoolName="Archeology (University Aleppo)"
              schoolDescription="Study of archeology, Research assistant in the State Museum, Collaboration in the restoration department on the museum objects / preparations and assistance in archaeological excavations of foreign missions"
               />

               <Education
                 startYear={2017}
                 endYear={2019}
                 schoolName="Web Development"
                 schoolDescription="I studied Front-end and Back-end Development in digital Career Institute DCI. 
                 I am providing front-end and back-end development, producing high quality responsive websites."
                  />
                <hr style={{borderTop: '3px solid blue'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Web Developer"
              jobDescription="Studied in digital Career Institute DCI front-end and back-end development, producing high quality responsive websites "
              />

             
              <hr style={{borderTop: '3px solid blue'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={85}
                />
                <Skills
                  skill="Javascript"
                  progress={75}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
