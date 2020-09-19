import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const columnStyle: React.CSSProperties = {
  backgroundColor: "#dbdbdb",
  marginTop: '1rem',
  marginLeft: '1rem',
  marginBottom: '1rem',
}

const lastColumnStyle: React.CSSProperties = {
  ...columnStyle,
  marginRight: '1rem'
}

const fontStyle: React.CSSProperties = {
  fontWeight: 300,
  textAlign: 'center'
}

export function ColumnsScreen(): JSX.Element {
  return (
    <Layout direction="column">
      <LayoutItem size="full" style={columnStyle}>
        <p style={fontStyle}>One</p>
      </LayoutItem>
      <LayoutItem size="full" style={columnStyle}>
        <p style={fontStyle}>Two</p>
      </LayoutItem>
      <LayoutItem size="full" style={lastColumnStyle}>
        <p style={fontStyle}>Three</p>
      </LayoutItem>
    </Layout>
  );
}