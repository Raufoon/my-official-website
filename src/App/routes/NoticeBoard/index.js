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
          const {color, content, datetime} = notice;
          const {d, m, y} = datetime;

          return (
            <div key={index} className="notice">
              <div className="noticeContent" dangerouslySetInnerHTML={{__html: content}}  style={{background: color}}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default withFetch(NoticeBoard, fetchNotices)
