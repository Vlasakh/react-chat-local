import React from 'react';

import './layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return <div className={'main'}>{children}</div>;
  }
}

export default Layout;
