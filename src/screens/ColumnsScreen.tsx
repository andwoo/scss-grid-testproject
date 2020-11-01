import * as React from 'react';
import { Layout, LayoutItem } from '@andwoo/scss-grid';
import { ItemText } from '../components/ItemText'

const containerClass = 'container container--column';
const containerItemClass = 'container__item container__item--column container__item--active';

export function ColumnsScreen(): JSX.Element {
  return (
    <React.Fragment>
      <Layout direction="row">

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch className={containerItemClass} style={{ minWidth: '60px', minHeight: '50px' }}>
              <ItemText text="none" style={{ paddingTop: '22px' }} />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch size="full" className={containerItemClass}>
              <ItemText text="full" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch size="half" className={containerItemClass}>
              <ItemText text="half" />
            </LayoutItem>
            <LayoutItem stretch size="half" className={containerItemClass}>
              <ItemText text="half" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch size="one-quarter" className={containerItemClass}>
              <ItemText text="one-quarter" />
            </LayoutItem>
            <LayoutItem stretch size="three-quarters" className={containerItemClass}>
              <ItemText text="three-quarter" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch size="one-third" className={containerItemClass}>
              <ItemText text="one-third" />
            </LayoutItem>
            <LayoutItem stretch size="two-thirds" className={containerItemClass}>
              <ItemText text="two-thirds" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
            <LayoutItem stretch size="one-fifth" className={containerItemClass}>
              <ItemText text="one-fifth" />
            </LayoutItem>
            <LayoutItem stretch size="four-fifths" className={containerItemClass}>
              <ItemText text="four-fifths" />
            </LayoutItem>
          </Layout>
        </LayoutItem>

        <LayoutItem size="full" stretch>
          <Layout direction="column" className={containerClass}>
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