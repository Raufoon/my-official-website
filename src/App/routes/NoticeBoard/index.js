import React from 'react';
import {fetchNotices} from './services/api.js';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import './style.css';

const NoticeBoard = props => {
  const [{notices}, isLoading, hasError] = useFetch(fetchNotices);

  return (
    <div className={`NoticeBoard ${props.className}`}>
      <h3>Notices</h3>

      {isLoading && <Loader/>}

      {hasError && <b>Failed to load notices...</b>}

      {
        notices && notices.map((notice, index) => {
          const {color, content} = notice;
          return (
            <div key={index} className="notice" dangerouslySetInnerHTML={{__html: content}}  style={{background: color}}/>
          )
        })
      }
    </div>
  )
}

export default NoticeBoard
