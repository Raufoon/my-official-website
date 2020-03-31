import React from 'react';
import ProfessionalCard from './components/ProfessionalCard';
import {fetchAbout} from './services/api.js';
import withFetch from '../../components/HOCs/withFetch';
import './style.css';

const AboutMe = props => {
  const {bio, proCard} = props;
  const {name, titles, info, photoUrl} = proCard;

  return (
    <div className="AboutMe">
      <ProfessionalCard name={name} titles={titles} info={info} photoUrl={photoUrl}/>
      <div dangerouslySetInnerHTML={{__html: bio}}></div>
    </div>
  )
}


export default withFetch(AboutMe, fetchAbout);
