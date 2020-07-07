import React, { Component } from 'react';

import withThemeContext from '../hoc/withThemeContext.js';

import configStyle from '../../configStyles/configStyle.js';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onAddContact } = this.props;
    onAddContact(this.state);
    this.setState({ name: '', phone: '' });
  };

  render() {
    const { theme } = this.props.value;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.form__label}>
          Name:
          <input
            className={s.form__input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>

        <label className={s.form__label}>
          Phone:
          <input
            className={s.form__input}
            type="number"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            placeholder="in format: 0XXXXXXXXX"
          />
        </label>

        <button
          type="submit"
          className={s.form__btn}
          style={{ color: configStyle[theme].color }}
        >
          Add Contact
        </button>
      </form>
    );
  }
}

export default withThemeContext(ContactForm);
