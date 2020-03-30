import React from 'react';
import './style.css';

const ProfessionalCard = (props) => {
  const {className, name, photoUrl, titles, info} = props;

  return (
    <div className={`ProfessionalCard ${className}`}>
      <img src={photoUrl} className='photo'/>
      <div className="data">
        <h1>{name}</h1>
        {
          titles.map(title => <div key={title}>{title}</div>)
        }
        <div>&nbsp;</div>
        {
          info.map(({key, value}) => (
            <div key={key}>
              <b>{key}</b>: {value}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProfessionalCard
