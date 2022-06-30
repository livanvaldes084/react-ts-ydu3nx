import * as React from 'react';
import Accordion from './components/Accordion';

export default function Voice() {
  const data = [
    {
      title: '"Para citas, marque el 1"',
      order: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.',
    },
    {
      title: '"Para nuestros horarios y dirección, marque 2"',
      order: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.',
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
