import React from 'react';
import withFetch from '../HOCs/withFetch'
import {fetchSocialLinks} from '../../services/api.js';
import './style.css';

const AppHeader = (props) => {
  const {socialLinks, myName} = props;
  const links = Object.values(socialLinks);

  return (
    <header className='AppHeader'>
      <div className="myName">{myName}</div>
      {
        links.map(({icon, url}) => (
          <a className="socialLink" rel="noopener noreferrer" key={url} href={url} target="_blank">
            <img src={icon} alt={`A social link icon`}/>
          </a>
        ))
      }
    </header>
  )
}

export default withFetch(AppHeader, fetchSocialLinks);
