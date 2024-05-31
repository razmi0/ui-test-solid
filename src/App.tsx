import type { Component } from "solid-js";
import DemoButtons from "./components/Demo";
import Section from "./components/ui/Section";

const App: Component = () => {
  return (
    <Section class="grid place-content-center">
      <DemoButtons />
    </Section>
  );
};

export default App;
