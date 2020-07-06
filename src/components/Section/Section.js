import React from 'react';

import withThemeContext from '../hoc/withThemeContext.js';

import themeConfig from '../../configStyles/configStyle.js';

import s from './Section.module.css';

function Section({ title, children, value }) {
  return (
    <section className={s.container} style={themeConfig[value.theme]}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default withThemeContext(Section);
