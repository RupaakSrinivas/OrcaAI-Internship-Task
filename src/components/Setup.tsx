import { Avatar, Accordion } from "@mantine/core";
import classes from "./../styles/setup.module.css";

export default function Setup() {
  const data = [
    {
      title: "Call Opening",
      question: "Was the purpose of the call stated in the beginning?",
      textContent:
        "Did the PST member greet the customer and use the call opening with good energetic tone?\nDid the PST member use the right salutation and greeting on the email?",
    },
    {
      title: "Greeting",
      question: "Did the salesperson use an appropriate openning greeting?",
      textContent:
        "Did the PST member greet the customer and use the call opening with good energetic tone?\nDid the PST member use the right salutation and greeting on the email?",
    },
    {
      title: "Call Closing",
      question:
        "Did the sales person summarize the key points discussed during the call?",
      textContent:
        "Did the PST member greet the customer and use the call opening with good energetic tone?\nDid the PST member use the right salutation and greeting on the email?",
    },
    {
      title: "Confidence",
      question:
        "Did the sales person appear confident and knowledgable about the product?",
      textContent:
        "Did the PST member greet the customer and use the call opening with good energetic tone?\nDid the PST member use the right salutation and greeting on the email?",
    },
  ];

  const items = data.map((item) => (
    <Accordion.Item key={item.title} value={item.title}>
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center gap-4">
          <Avatar size={24} color="indigo" />
          <p className="text-blue-600 font-bold">{item.title}</p>
        </div>
      </div>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>
        <div className="p-4">
          <p className="font-semibold text-gray-400">
            How will this be scored?
          </p>
          <div className="border-2 rounded-xl my-4 p-4">
            <p className="font-semibold text-gray-500 mb-4">{item.question} </p>
            <p>{item.textContent}</p>
          </div>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className=" max-h-[450px] overflow-y-auto bg-white">
      <Accordion
        classNames={classes}
        className="my-8"
        variant="contained"
        chevronSize={28}
        radius="lg"
        chevronPosition="left"
      >
        {items}
      </Accordion>
    </div>
  );
}
