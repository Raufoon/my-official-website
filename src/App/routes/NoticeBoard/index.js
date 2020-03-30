import React from 'react';
import {fetchNotices} from './services/api.js';
import './style.css';

export default class NoticeBoard extends React.Component {
  state = {notices: []}

  async componentDidMount() {
    this.setState({
      notices: await fetchNotices()
    })
  }

  render () {
    const {className} = this.props;
    const {notices} = this.state;

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
}
