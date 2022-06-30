import * as React from 'react';
import Accordion from './components/Accordion';

export default function Voice() {
  const data = [
    {
      title: 'How much do i need to pay for this?',
      order: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.',
    },
    {
      title: 'Can i delete my account?',
      order: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.',
    },
  ];
  return (
    <div>
      <h2 className="text-4xl">BrainHi Voice IVR</h2>
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
