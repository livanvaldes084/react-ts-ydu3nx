import * as React from 'react';
import Accordion from './components/Accordion';

export default function Voice() {
  const data = [
    {
      title: '"Para citas, marque el 1"',
      order: 1,
      content: {
        data: [
          {
            title: '"Para citas, marque el 1"',
            order: 1,
          },
          {
            title: '"Para citas, marque el 1"',
            order: 2,
          },
        ],
      },
    },
  ];
  return (
    <div className="p-12">
      <div className="flex flex-col container gap-4">
        {data.map((item) => (
          <Accordion
            title={item.title}
            content={item.content}
            order={item.order}
          />
        ))}
      </div>
    </div>
  );
}
