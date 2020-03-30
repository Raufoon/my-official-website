import React from 'react';
import ProfessionalCard from './components/ProfessionalCard';
import {fetchAbout} from './services/api.js';
import withFetch from '../../components/HOCs/withFetch';
import Responsive from '../../components/Responsive';
import './style.css';

const AboutMe = props => {
  const {bio, proCard} = props;
  const {name, titles, info, photoUrl} = proCard;

  return (
    <div className="AboutMe">
      <Responsive screens={[Responsive.MOBILE_SCREEN]}>
        <ProfessionalCard className="cardMobile" name={name} titles={titles} info={info} photoUrl={photoUrl}/>
      </Responsive>
      <Responsive screens={[Responsive.LARGE_SCREEN, Responsive.MEDIUM_SCREEN]}>
        <ProfessionalCard name={name} titles={titles} info={info} photoUrl={photoUrl}/>
      </Responsive>
      <div dangerouslySetInnerHTML={{__html: bio}}></div>
    </div>
  )
}


export default withFetch(AboutMe, fetchAbout);
