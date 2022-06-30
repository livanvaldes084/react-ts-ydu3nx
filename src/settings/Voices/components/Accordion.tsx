import * as React from 'react';
import { useState, useRef } from 'react';

type AccordionProps = {
  title: string;
  content: string;
};
const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };
  return (
    <div className="flex flex-row">
      <div onClick={HandleOpening} className="mt-4">
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
      <div>
        <div className="border border-indigo-400 rounded">
          <div className={'bg-indigo-300 p-4 flex justify-between text-white'}>
            <h4 className="font-semibold">{title}</h4>
          </div>
          <div
            ref={contentElement}
            style={{ height: height }}
            className="bg-gray-200 overflow-hidden transition-all duration-200"
          >
            <p className="p-4">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
