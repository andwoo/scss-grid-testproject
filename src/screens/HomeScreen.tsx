import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const containerStlye: React.CSSProperties = {
  padding: '1rem',
  backgroundColor: '#00ff00'
}

const pStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 400,
}

export function HomeScreen(): JSX.Element {
  return (
    <Layout direction="column" style={containerStlye}>
      <LayoutItem size="full">
        <p style={pStyle}>The SCSS Grid test project</p>
      </LayoutItem>
    </Layout>
  );
}