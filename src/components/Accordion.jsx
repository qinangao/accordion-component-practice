import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={index}
          key={index}
        />
      ))}
    </div>
  );
}
