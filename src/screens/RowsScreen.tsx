import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';
import { ItemText } from '../components/ItemText'

const containerClass = 'container container--row';
const containerItemClass = 'container__item container__item--row container__item--active';

const fullHeightStlye: React.CSSProperties = {
  height: '100%'
}

export function RowsScreen(): JSX.Element {
  return (
    <React.Fragment>
      <Layout style={fullHeightStlye}>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch className={containerItemClass} style={{ minWidth: '50px', minHeight: '50px' }}>
              <ItemText text="none" style={{ paddingTop: '22px' }} />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="full" className={containerItemClass}>
              <ItemText text="full" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="half" className={containerItemClass}>
              <ItemText text="half" />
            </LayoutItem>
            <LayoutItem stretch size="half" className={containerItemClass}>
              <ItemText text="half" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="one-quarter" className={containerItemClass}>
              <ItemText text="one-quarter" />
            </LayoutItem>
            <LayoutItem stretch size="three-quarters" className={containerItemClass}>
              <ItemText text="three-quarter" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="one-third" className={containerItemClass}>
              <ItemText text="one-third" />
            </LayoutItem>
            <LayoutItem stretch size="two-thirds" className={containerItemClass}>
              <ItemText text="two-thirds" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="one-fifth" className={containerItemClass}>
              <ItemText text="one-fifth" />
            </LayoutItem>
            <LayoutItem stretch size="four-fifths" className={containerItemClass}>
              <ItemText text="four-fifths" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="row" className={containerClass} style={fullHeightStlye}>
            <LayoutItem stretch size="two-fifths" className={containerItemClass}>
              <ItemText text="two-fifths" />
            </LayoutItem>
            <LayoutItem stretch size="three-fifths" className={containerItemClass}>
              <ItemText text="three-fifths" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

      </Layout>
    </React.Fragment >
  );
}