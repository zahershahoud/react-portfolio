import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="image/avatar.jpg"
              alt="myImage"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1> Web Developer</h1>

              <hr/>

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

             <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/zaher-shahoud-03190717a/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/zahershahoud" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Xing */}
          <a href="https://www.xing.com/profile/zaher_shahhoud/cv?sc_o=mxb_p" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-xing-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.facebook.com/zaher.shahoud.5" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
