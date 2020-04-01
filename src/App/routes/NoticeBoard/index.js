import React from 'react';
import {fetchNotices} from './services/api.js';
import withFetch from '../../components/HOCs/withFetch';
import './style.css';

const NoticeBoard = props => {
  const {className, notices} = props;

  return (
    <div className={`NoticeBoard ${className}`}>
      <h3>Notices</h3>
      {
        notices.map((notice, index) => {
          const {color, content} = notice;

          return (
            <div key={index} className="notice" dangerouslySetInnerHTML={{__html: content}}  style={{background: color}}>

            </div>
          )
        })
      }
    </div>
  )
}

export default withFetch(NoticeBoard, fetchNotices)
