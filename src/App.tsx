import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Grid, Column, ColumnLineBreak } from '@andwoo/scss-grid';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Grid>
          <Column>
            <p>Hello There!</p>
          </Column>
          <Column>
            <Column>
              <p>Hi!</p>
            </Column>
            <Column style={{ height: 200 }}>
              <Grid>
                <Column style={{ backgroundColor: "#ff0000", height: '50%', width: '33%' }}>
                  <p>1</p>
                </Column>
                <Column style={{ backgroundColor: "#f000f0", height: '50%', width: '33%' }}>
                  <p>2</p>
                </Column>
                <ColumnLineBreak />
                <Column style={{ backgroundColor: "#f000f0", height: '50%', width: '33%' }} >
                  <p>3</p>
                </Column>
                <Column style={{ backgroundColor: "#f000f0", height: '50%', width: '33%' }} >
                  <p>4</p>
                </Column>
                <Column style={{ backgroundColor: "#f000f0", height: '50%', width: '33%' }}>
                  <p>5</p>
                </Column>
                <Column style={{ backgroundColor: "#f000f0", height: '50%', width: '33%' }}>
                  <p>6</p>
                </Column>
              </Grid>
            </Column>
          </Column>
        </Grid>
      </div >
    );
  }
}

export default hot(module)(App);
