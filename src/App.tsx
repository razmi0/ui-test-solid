import type { Component } from "solid-js";
import Buttons from "./components/ui/Buttons/Button";
import Section from "./components/ui/Section";
import Demo from "./components/Demo";

const App: Component = () => {
  return (
    <Section class="grid place-content-center">
      <Demo.Buttons />
    </Section>
  );
};

export default App;
