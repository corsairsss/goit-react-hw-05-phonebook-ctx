import React from 'react';

import ThemeContext from '../../contexts/ThemeContext.js';

const withThemeContext = WrappedComponent => {
  return function withThemeContext(props) {
    return (
      <ThemeContext.Connsumer>
        {context => <WrappedComponent {...props} value={context} />}
      </ThemeContext.Connsumer>
    );
  };
};

export default withThemeContext;
