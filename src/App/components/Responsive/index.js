import React, {Component, Fragment} from 'react';

export default class Responsive extends Component {
  static MOBILE_SCREEN = 'SM';
  static MEDIUM_SCREEN = 'M';
  static LARGE_SCREEN = 'L';

  constructor(props) {
    super(props);
    this.state = {width: Responsive.calcWidth()};
    this.setWidth = this.setWidth.bind(this);
  }

  setWidth() {
    this.setState({width: Responsive.calcWidth()})
  }

  static calcWidth() {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      W = w.innerWidth || e.clientWidth || g.clientWidth;
    return W;
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
  }

  render() {
    const {screens, children, ...restProps} = this.props;
    const {width} = this.state;

    return (screens.indexOf(Responsive.MOBILE_SCREEN) !== -1 && width < 800 && <Fragment {...restProps}>{children}</Fragment>)
    || (screens.indexOf(Responsive.MEDIUM_SCREEN) !== -1 && width >= 800 && width < 1500 && <Fragment {...restProps}>{children}</Fragment>)
    || (screens.indexOf(Responsive.LARGE_SCREEN) !== -1 && width >= 1500 && <Fragment {...restProps}>{children}</Fragment>);
  }
}
