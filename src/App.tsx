import * as React from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout, LayoutItem } from '@andwoo/scss-grid';
import { NavBar } from './components/NavBar'
import { HomeScreen } from './screens/HomeScreen';
import { ColumnsScreen } from './screens/ColumnsScreen';
import { RowsScreen } from './screens/RowsScreen';

const rootStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
}

const routeStyle: React.CSSProperties = {
  padding: '1rem',
  height: '100%'
}

const navBarLinks = {
  links: [{
    to: '/',
    label: 'Home'
  }, {
    to: '/columns',
    label: 'Columns'
  }, {
    to: '/rows',
    label: 'Rows'
  }]
}

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <Layout direction="row" style={rootStyle}>
          <LayoutItem stretch>
            <NavBar {...navBarLinks} />
          </LayoutItem>
          <LayoutItem size='full' stretch style={routeStyle}>
            <Switch>
              <Route path="/rows">
                <RowsScreen />
              </Route>
              <Route path="/columns">
                <ColumnsScreen />
              </Route>
              <Route path="*">
                <HomeScreen />
              </Route>
            </Switch>
          </LayoutItem>
        </Layout >
      </Router>
    );
  }
}

export default hot(module)(App);
