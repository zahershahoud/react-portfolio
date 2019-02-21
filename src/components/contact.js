import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent ,Footer,FooterSection,FooterDropDownSection,FooterLinkList} from 'react-mdl';


class Contact extends Component {
  render() {
    return(
     


    <div className="contact-body">
    <Grid className="contact-grid">
      <Cell col={6}>
        <h2>Zaher Shahoud</h2>
        <img
          src="image/avatar.jpg"             
          alt="myImage"
          style={{height: '150px', borderRadius:'7px'}}
           />
         <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',fontSize: '25px',fontFamily: 'Anton',lineHeight:'40px'}}>keep in touch and<br/> send us all your<br/> messages. </p>

      </Cell>
      <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>

        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton',color:'white'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                00491 5731104578
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton',marginTop:'3rem',color:'white'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                zahershahoud.88@gmail.com
              </ListItemContent>
            </ListItem>

            


          </List>
        </div>
      </Cell>
    </Grid>
  </div>
    )
  }
}

export default Contact;
