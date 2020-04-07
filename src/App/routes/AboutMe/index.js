import React from 'react';
import ProfessionalCard from './components/ProfessionalCard';
import {fetchAbout} from './services/api.js';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import './style.css';

const AboutMe = props => {
  const [{bio, proCard}, isLoading, hasError] = useFetch(fetchAbout);
  const {name, titles, info, photoUrl} = proCard || {};

  if (isLoading) return <Loader className="AboutMe"/>

  return (
    <div className="AboutMe">
      {hasError && <b>Please refresh</b>}
      <ProfessionalCard name={name} titles={titles} info={info} photoUrl={photoUrl}/>
      <div dangerouslySetInnerHTML={{__html: bio}}></div>
    </div>
  )
}

export default AboutMe
