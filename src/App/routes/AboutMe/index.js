import React from 'react';
import ProfessionalCard from './components/ProfessionalCard';
import {fetchAbout} from './services/api.js';
import './style.css';

export default class AboutMe extends React.Component {
  state = {bio: '', proCard: undefined}

  async componentDidMount() {
    const {bio, proCard} = await fetchAbout();
    this.setState({bio, proCard});
  }

  render() {
    const {bio, proCard} = this.state;

    if (!proCard) return "LOADING...";

    const {name, titles, info, photoUrl} = proCard;

    return (
      <div className="AboutMe">
        <ProfessionalCard
          name={name}
          titles={titles}
          info={info}
          photoUrl={photoUrl}/>
        <div dangerouslySetInnerHTML={{__html: bio}}></div>
      </div>
    )
  }
}
