import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const containerStyle: React.CSSProperties = {
  width: '100%'
}

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
    <React.Fragment>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="full" style={Object.assign({ ...columnStyle }, lastColumnStyle)}>
          <p style={fontStyle}>full</p>
        </LayoutItem>
      </Layout>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="half" style={columnStyle}>
          <p style={fontStyle}>half</p>
        </LayoutItem>
        <LayoutItem size="half" style={lastColumnStyle}>
          <p style={fontStyle}>half</p>
        </LayoutItem>
      </Layout>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="one-quarter" style={columnStyle}>
          <p style={fontStyle}>one quarter</p>
        </LayoutItem>
        <LayoutItem size="three-quarters" style={lastColumnStyle}>
          <p style={fontStyle}>three quarters</p>
        </LayoutItem>
      </Layout>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="one-third" style={columnStyle}>
          <p style={fontStyle}>one third</p>
        </LayoutItem>
        <LayoutItem size="two-thirds" style={lastColumnStyle}>
          <p style={fontStyle}>two thirds</p>
        </LayoutItem>
      </Layout>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="one-fifth" style={columnStyle}>
          <p style={fontStyle}>one fifth</p>
        </LayoutItem>
        <LayoutItem size="four-fifths" style={lastColumnStyle}>
          <p style={fontStyle}>four fifths</p>
        </LayoutItem>
      </Layout>
      <Layout direction="column" style={containerStyle}>
        <LayoutItem size="two-fifths" style={columnStyle}>
          <p style={fontStyle}>two fifts</p>
        </LayoutItem>
        <LayoutItem size="three-fifths" style={lastColumnStyle}>
          <p style={fontStyle}>three fifths</p>
        </LayoutItem>
      </Layout>
    </React.Fragment >
  );
}