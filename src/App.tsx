import * as React from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, LayoutItem } from '@andwoo/scss-grid';
import { HomeScreen } from './screens/HomeScreen';
import { ColumnsScreen } from './screens/ColumnsScreen';
import { RowsScreen } from './screens/RowsScreen';

const rootStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  backgroundColor: "#f7f7f7"
}

const navStyle: React.CSSProperties = {
  padding: 20,
  backgroundColor: "#e8e8e8"
}

const navItemStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '2rem',
  fontWeight: 300,
  marginRight: '1rem'
}

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <Layout direction="row" style={rootStyle}>
          <LayoutItem style={navStyle}>
            <nav>
              <ul>
                <li style={navItemStyle}>
                  <Link to="/">Home</Link>
                </li>
                <li style={navItemStyle}>
                  <Link to="/columns">Columns</Link>
                </li>
                <li style={navItemStyle}>
                  <Link to="/rows">Rows</Link>
                </li>
              </ul>
            </nav>
          </LayoutItem>
          <LayoutItem size='full'>
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
