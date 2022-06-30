import * as React from 'react';
import { useState, useRef } from 'react';
import AccordionItem from './AccordionItem';

type ContentProps = {
  description?: string;
  data?: Array<{ title: string; order: number }>;
};
type AccordionProps = {
  title: string;
  order?: number;
  content?: ContentProps;
};
const Accordion = ({ title, order, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };
  const contentItems = content?.description
    ? content?.description
    : content.data.map((item) => (
        <AccordionItem title={item.title} order={item.order} />
      ));

  return (
    <div className="flex flex-row ">
      <div onClick={HandleOpening} className="mt-3">
        {isOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>
      <AccordionItem
        title={title}
        content={contentItems}
        order={order}
        contentElement={contentElement}
        height={height}
        isOpened={isOpened}
      />
    </div>
  );
};

export default Accordion;
