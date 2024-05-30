import type { Component } from "solid-js";
import Button from "./components/ui/Buttons/Button";
import Section from "./components/ui/Section";

const App: Component = () => {
  return (
    <Section class="grid place-content-center">
      <h1>Some buttons </h1>
      <div class="space-x-3">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </div>
    </Section>
  );
};

export default App;
