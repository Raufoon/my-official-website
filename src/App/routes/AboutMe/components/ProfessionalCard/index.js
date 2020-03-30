import React from 'react';
import './style.css';

const ProfessionalCard = (props) => {
  const {name, photoUrl, titles, info} = props;

  return (
    <div className='ProfessionalCard'>
      <img src={photoUrl} className='photo'/>
      <div className="data">
        <h1>{name}</h1>
        {
          titles.map(title => <h4 key={title}>{title}</h4>)
        }
        <br/>
        {
          info.map(({key, value}) => (
            <h4 key={key}>
              <b>{key}</b>: {value}
            </h4>
          ))
        }
      </div>
    </div>
  )
}

export default ProfessionalCard
