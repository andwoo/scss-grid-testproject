import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const pStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 400,
}

export function HomeScreen(): JSX.Element {
  return (
    <Layout direction="column" style={{ padding: '1rem' }}>
      <LayoutItem size="full">
        <p style={pStyle}>The SCSS Grid test project</p>
      </LayoutItem>
    </Layout>
  );
}