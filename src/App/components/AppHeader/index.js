import React from 'react';
import withFetch from '../HOCs/withFetch'
import {fetchSocialLinks} from '../../services/api.js';
import './style.css';

const AppHeader = (props) => {
  const {socialLinks} = props;
  const links = Object.values(socialLinks);

  return (
    <header className='AppHeader'>
      <div className="myName">Minhaz Raufoon</div>
      {
        links.map(({icon, url}) => (
          <a className="socialLink" key={url} href={url} target="_blank">
            <img src={icon}/>
          </a>
        ))
      }
    </header>
  )
}

export default withFetch(AppHeader, fetchSocialLinks);
