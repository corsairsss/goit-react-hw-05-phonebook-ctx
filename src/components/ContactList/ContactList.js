import React from 'react';

import withThemeContext from '../hoc/withThemeContext';

import configStyle from '../../configStyles/configStyle';

import s from './ContactList.module.css';

function ContactList({ list, removeContact, value }) {
  const { theme } = value;
  return (
    <ul className={s.list}>
      {list.map(elem => {
        const href = `tel:+38${elem.phone}`;
        return (
          <li key={elem.id} className={s.list__item}>
            <span>{elem.name}:</span>
            <a href={href} style={configStyle[theme]}>
              {elem.phone}
            </a>
            <button type="button" onClick={removeContact} data-key={elem.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default withThemeContext(ContactList);
