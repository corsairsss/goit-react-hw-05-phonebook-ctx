import React from 'react';

import withThemeContext from '../hoc/withThemeContext.js';

import s from './Button.module.css';

const Button = ({ value }) => {
  return (
    <div className={s.footer}>
      <button
        className={s.footer__btn}
        onClick={value.onLightTheme}
        type="button"
      >
        Light
      </button>

      <button
        className={s.footer__btn}
        onClick={value.onDarkTheme}
        type="button"
      >
        Dark
      </button>
    </div>
  );
};

export default withThemeContext(Button);
