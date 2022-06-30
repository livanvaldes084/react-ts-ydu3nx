import * as React from 'react';
import { useState, useRef } from 'react';

type AccordionProps = {
  title: string;
  order: number;
  content: string;
};
const Accordion = ({ title, order, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };
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
      <div className="border border-indigo-400 rounded bg-gray-100">
        <div
          className={`flex flex-row items-center ${
            isOpened && 'border-indigo-400 border-b'
          }`}
        >
          <div className="text-white bg-indigo-400 p-2">{order}</div>
          <div className="flex flex-row justify-between w-full p-2">
            <h4 className="text-blue-500">{title}</h4>
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div
          ref={contentElement}
          style={{ height: height }}
          className="overflow-hidden transition-all duration-200"
        >
          <p className="p-4">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
