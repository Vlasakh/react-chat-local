import React from 'react';

import './layout.css';

function Layout({ children }) {
  return <div className={'main'}>{children}</div>;
}

export default Layout;
