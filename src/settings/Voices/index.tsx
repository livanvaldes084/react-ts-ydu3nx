import * as React from 'react';
import Accordion from "./components/Accordion"

export default function Voice() {
  const data = [
    {
      title: "How much do i need to pay for this?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo."
    },
    {
      title: "Can i delete my account?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo."
    },
    {
      title: "Is this accordion styled in Tailwind css?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
  return <h2 className="text-4xl">BrainHi Voice IVR</h2>;
}
