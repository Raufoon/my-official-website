import React from 'react';
import useFetch from '../../hooks/useFetch'
import {fetchSocialLinks} from '../../services/api.js';
import './style.css';

const AppHeader = (props) => {
  const [{socialLinks}] = useFetch(fetchSocialLinks);
  const {myName} = props;
  const links = Object.values(socialLinks || {});

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

export default AppHeader
