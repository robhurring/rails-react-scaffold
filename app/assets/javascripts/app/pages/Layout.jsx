import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/Header';

export default class Layout extends React.Component {
  render() {
    return (
      <section>
        <Header/>
        <RouteHandler/>
      </section>
    );
  }
}
