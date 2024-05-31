import Dialog from "./Dialog";
import { Button, ButtonGroup } from "./ui/Buttons/Button";
import Slider from "./ui/Slider/Slider";

const DemoButtons = () => {
  return (
    <>
      <div class="flex gap-2 items-center justify-center">
        <h1>Some buttons </h1>
        <Dialog type="buttons" />
      </div>
      <ButtonGroup>
        <Slider />
        <Button variant="solid">Button 1</Button>
        <Button variant="solid">Button 2</Button>
        <Button variant="solid">Button 3</Button>
        <Button variant="solid">Button 4</Button>
      </ButtonGroup>
    </>
  );
};

export default DemoButtons;
