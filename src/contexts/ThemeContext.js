import React, { Component, createContext } from 'react';

const Context = createContext();

export default class ThemeContext extends Component {
  static Connsumer = Context.Consumer;

  lightTheme = () => {
    this.setState({ theme: 'light' });
  };

  darkTheme = () => {
    this.setState({ theme: 'dark' });
  };

  state = {
    theme: 'light',
    onLightTheme: this.lightTheme,
    onDarkTheme: this.darkTheme,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
