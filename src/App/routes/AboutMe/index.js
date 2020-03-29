import React from 'react';
import {fetchBio} from './services/api.js';

export default class AboutMe extends React.Component {
  state = {bio: ''}

  async componentDidMount() {
    this.setState({
      bio: await fetchBio()
    });
  }

  render() {
    const {bio} = this.state;
    return <div dangerouslySetInnerHTML={{__html: bio}}></div>
  }
}
