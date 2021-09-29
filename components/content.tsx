import React, { useState } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';
import ApplianceCard, { Appliance } from './appliance';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface ApplianceItems {
  key: string;
  appliance: Appliance;
}

const appliances: Appliance[] = [
  {
    title: '部屋の照明',
    image: 'static/light.jpeg',
    discription: '部屋の照明のON/OFF、また明るくしたり暗くしたりできます。',
  },
  {
    title: 'エアコン',
    image: 'static/aircon.jpeg',
    discription: 'エアコンのON/OFF、また温度のUP/DOWNができます。',
  },
  {
    title: '部屋の照明',
    image: 'static/light.jpeg',
    discription: '部屋の照明のON/OFF、また明るくしたり暗くしたりできます。',
  },
  {
    title: 'エアコン',
    image: 'static/aircon.jpeg',
    discription: 'エアコンのON/OFF、また温度のUP/DOWNができます。',
  },
];

function ApplianceItems() {
  return appliances.reduce<ApplianceItems[]>((acc, item, index) => {
    const res: ApplianceItems = {
      key: index.toString(),
      appliance: item,
    };
    acc.push(res);
    return acc;
  }, []);
}

function initialLayouts(): Layouts {
  const l: Layout[] = ApplianceItems().reduce<Layout[]>((acc, item, index) => {
    const v = index % 4;
    const re: Layout = {
      w: 6,
      h: 6,
      x: v % 2 === 0 ? 6 : 0,
      y: v % 2 !== 0 ? 6 : 0,
      i: item.key,
      // moved: false,
      // static: false,
    };
    acc.push(re);
    return acc;
  }, []);

  return { lg: l };
}

// const initialLayouts: Layouts = {
//   lg: [
//     { w: 6, h: 6, x: 0, y: 0, i: 'a', moved: false, static: false },
//     { w: 6, h: 6, x: 6, y: 0, i: 'b', moved: false, static: false },
//     { w: 6, h: 6, x: 6, y: 0, i: 'c', moved: false, static: false },
//     { w: 6, h: 6, x: 0, y: 6, i: 'd', moved: false, static: false },
//   ],
// };

export default function Content() {
  const [items] = useState<ApplianceItems[]>(ApplianceItems());
  const [layouts, setLayouts] = useState<Layouts>(initialLayouts());
  const onLayoutChange = (_: any, allLayouts: Layouts) => {
    setLayouts(allLayouts);
  };

  return (
    <>
      <ResponsiveGridLayout
        className='layout'
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        compactType='horizontal'
        onLayoutChange={onLayoutChange}
      >
        {items.map((item) => (
          <div key={item.key} className='widget' data-grid={{ w: 3, h: 2, x: 1, y: Infinity }}>
            <ApplianceCard appliance={item.appliance} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}
