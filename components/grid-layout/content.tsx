import React, { useState } from 'react';
import { Layouts, Responsive, WidthProvider } from 'react-grid-layout';

import AreaChart from '../chart/areaChart';
import BarChart from '../chart/barChart';
import LineChart from '../chart/lineChart';
import ScatterChart from '../chart/scatterChart';
import TopBar from './topBar';
import Widget from './widget';

const ResponsiveGridLayout = WidthProvider(Responsive);

const originalItems: string[] = ['a', 'b', 'c', 'd'];

const initialLayouts: Layouts = {
  lg: [
    { w: 6, h: 6, x: 0, y: 0, i: 'a', moved: false, static: false },
    { w: 3, h: 6, x: 9, y: 0, i: 'b', moved: false, static: false },
    { w: 3, h: 6, x: 6, y: 0, i: 'c', moved: false, static: false },
    { w: 3, h: 4, x: 0, y: 6, i: 'd', moved: false, static: false },
  ],
};

const componentList: any = {
  a: LineChart,
  b: AreaChart,
  c: BarChart,
  d: ScatterChart,
};

export default function Content() {
  const [items, setItems] = useState<string[]>(originalItems);
  const [layouts, setLayouts] = useState<Layouts>(getFromLS('layouts') || initialLayouts);
  const onLayoutChange = (_: any, allLayouts: Layouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS('layouts', layouts);
  };
  const onRemoveItem = (itemId: string) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId: string) => {
    setItems([...items, itemId]);
  };

  return (
    <>
      <TopBar
        onLayoutSave={onLayoutSave}
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        originalItems={originalItems}
      />
      <ResponsiveGridLayout
        className='layout'
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        compactType='horizontal'
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) => (
          <div key={key} className='widget' data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}>
            <Widget id={key} onRemoveItem={onRemoveItem} component={componentList[key]} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

function getFromLS(key: string) {
  let ls: any = {};
  if (global.localStorage) {
    try {
      const item: string | null = global.localStorage.getItem('rgl-8');
      if (item === null) {
        throw new Error('null');
      } else {
        ls = JSON.parse(item) || {};
      }
    } catch (e) {
      console.error(e);
    }
  }
  return ls[key];
}

function saveToLS(key: string, value: Layouts) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
