import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

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
    <Layout direction="row">
      <LayoutItem size="full" style={rowStyle}>
        <p style={fontStyle}>One</p>
      </LayoutItem>
      <LayoutItem size="full" style={rowStyle}>
        <p style={fontStyle}>Two</p>
      </LayoutItem>
      <LayoutItem size="full" style={lastRowStyle}>
        <p style={fontStyle}>Three</p>
      </LayoutItem>
    </Layout>
  );
}