import React from 'react';

function withFetch(WrappedComponent, fetchFunc) {
  return class extends React.Component {
    state = {isLoading: true, hasError: false}

    async componentDidMount() {
      try {
        const data = await fetchFunc();
        this.setState({...data, isLoading: false});
      }
      catch(error) {
        this.setState({hasError: true});
      }
    }

    render() {
      const {isLoading, hasLoaded, hasError, ...rest} = this.state;
      const {className} = this.props;

      if (isLoading) return <div className={className}>LOADING...</div>

      if (hasError) return <div className={className}>couldn't load data, please refresh</div>

      return (
        <WrappedComponent {...this.props} {...rest}/>
      )
    }
  }
}

export default withFetch;
