import { Accordion, Tabs } from "@mantine/core";
import { IoMdArrowDropdown } from "react-icons/io";
import Setup from "./Setup";

const data = [
  { value: "How does it work?", description: "Apples are red" },
  { value: "When should you use this?", description: "Bananas are yellow" },
];

export default function MainContent() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <p className="text-blue-600 font-bold">{item.value}</p>
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="h-full w-full">
      <h1 className="text-blue-800 my-4 text-3xl font-bold">
        Analyse the calls for Soft Skills Coaching
      </h1>
      <Accordion
        variant="seperate"
        chevronSize={28}
        chevronPosition="left"
        chevron={<IoMdArrowDropdown className="text-blue-600 text-2xl" />}
      >
        {items}
      </Accordion>
      <div className="border-2 rounded-2xl p-4 max-h-[500px] w-full bg-white shadow-xl">
        <Tabs classNames={{panel: "bg-white"}} defaultValue="Setup">
          <Tabs.List>
            <Tabs.Tab value="Setup">Setup</Tabs.Tab>
            <Tabs.Tab value="Sample Output">Sample Output</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Setup"><Setup /></Tabs.Panel>
          <Tabs.Panel value="Sample Output">Messages tab content</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
