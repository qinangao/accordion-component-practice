import Accordion from "./components/Accordion";
import faqs from "./components/data";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
