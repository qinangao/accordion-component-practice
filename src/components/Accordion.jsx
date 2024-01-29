import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={index}
          key={index}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Section 4"
        num="4"
        key="04"
      >
        <p>test test test </p>
        <ul>
          <li>dsafasdf</li>
          <li>dfasdfasd</li>
          <li>dsfsadfsad</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
