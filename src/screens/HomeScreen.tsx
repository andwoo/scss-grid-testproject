import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';

const containerStlye: React.CSSProperties = {
  width: '100%',
  height: '100%'
}

const pStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 400,
}

export function HomeScreen(): JSX.Element {
  return (
    <Layout direction="column" style={containerStlye}>
      <LayoutItem size="full">
        <div>
          <p style={pStyle}>The SCSS Grid test project</p>
        </div>
      </LayoutItem>
    </Layout>
  );
}