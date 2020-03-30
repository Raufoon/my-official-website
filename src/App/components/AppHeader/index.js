import React from 'react';
import withFetch from '../HOCs/withFetch'
import {fetchSocialLinks} from '../../services/api.js';
import Responsive from '../Responsive'
import './style.css';

const AppHeader = (props) => {
  const {socialLinks} = props;
  const links = Object.values(socialLinks);

  return (
    <header className='AppHeader'>
      <Responsive screens={[Responsive.MEDIUM_SCREEN, Responsive.LARGE_SCREEN]}>
        <div className="myName">Minhaz Raufoon</div>
        {
          links.map(({icon, url}) => (
            <a className="socialLink" key={url} href={url} target="_blank">
              <img src={icon}/>
            </a>
          ))
        }
      </Responsive>
      <Responsive screens={[Responsive.MOBILE_SCREEN]}>
        <div>Minhaz Raufoon</div>
      </Responsive>
    </header>
  )
}

export default withFetch(AppHeader, fetchSocialLinks);
