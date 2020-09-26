import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const containerStyle: React.CSSProperties = {
  width: '50%',
  height: '100%'
}

const rowStyle: React.CSSProperties = {
  backgroundColor: "#dbdbdb",
  marginTop: '1rem',
  marginRight: '1rem',
  marginLeft: '1rem',
}

const lastRowStyle: React.CSSProperties = {
  ...rowStyle,
  marginBottom: '1rem'
}

const fontStyle: React.CSSProperties = {
  fontWeight: 300,
  textAlign: 'center'
}

export function RowsScreen(): JSX.Element {
  return (
    <React.Fragment>
      <Layout direction="column">
        <Layout direction="row" style={containerStyle}>
          <LayoutItem size="full" style={rowStyle} stretch>
            <p style={fontStyle}>One</p>
          </LayoutItem>
          <LayoutItem size="full" style={rowStyle}>
            <p style={fontStyle}>Two</p>
          </LayoutItem>
          <LayoutItem size="full" style={lastRowStyle} stretch>
            <p style={fontStyle}>Three</p>
          </LayoutItem>
        </Layout>
        <Layout direction="row" style={containerStyle}>
          <LayoutItem size="full" style={rowStyle} stretch>
            <p style={fontStyle}>One</p>
          </LayoutItem>
          <LayoutItem size="full" style={rowStyle}>
            <p style={fontStyle}>Two</p>
          </LayoutItem>
          <LayoutItem size="full" style={lastRowStyle} stretch>
            <p style={fontStyle}>Three</p>
          </LayoutItem>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}