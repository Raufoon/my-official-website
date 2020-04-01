import React from 'react';
import Responsive from '../../../../components/Responsive';
import './style.css';

const ProfessionalCard = (props) => {
  const {className, name, photoUrl, titles, info} = props;

  const data = (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <div className={`ProfessionalCard ${className}`}>
      <img src={photoUrl} className='photo' alt='Me'/>
      <Responsive screens={[Responsive.MEDIUM_SCREEN, Responsive.LARGE_SCREEN]}>
        <div className="data">{data}</div>
      </Responsive>
      <Responsive screens={[Responsive.MOBILE_SCREEN]}>
        <div className="data-mobile">{data}</div>
      </Responsive>
    </div>
  )
}

export default ProfessionalCard
