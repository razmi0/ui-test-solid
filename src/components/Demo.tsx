import type { JSX } from "solid-js";
import Dialog from "./Code/Pre";
import Buttons from "./ui/Buttons/Button";

const DemoButtons = () => {
  return (
    <>
      <h1>Some buttons </h1>
      <Dialog type="buttons" />
      <Buttons.ButtonGroup>
        <Buttons.Button variant="solid">Button 1</Buttons.Button>
        <Buttons.Button variant="solid">Button 2</Buttons.Button>
        <Buttons.Button variant="solid">Button 3</Buttons.Button>
        <Buttons.Button variant="solid">Button 4</Buttons.Button>
      </Buttons.ButtonGroup>
    </>
  );
};

const Demo = {
  Buttons: DemoButtons,
};

export default Demo;
