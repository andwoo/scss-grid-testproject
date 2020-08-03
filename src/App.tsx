import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Column } from '@andwoo/scss-grid';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Column>
        <p>Hello There!</p>
      </Column>
    );
  }
}

export default hot(module)(App);
