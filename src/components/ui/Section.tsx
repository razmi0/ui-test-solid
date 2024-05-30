import type { ComponentProps, ParentComponent } from "solid-js";

type SizeType = "sm" | "md" | "lg" | "screen";
type ExtensionType = "none" | "sm" | "md" | "lg" | "xl";

const sizes: Record<SizeType, string> = {
  sm: "25vh",
  md: "50vh",
  lg: "75vh",
  screen: "100vh",
};

const extensions: Record<ExtensionType, string> = {
  none: "0px",
  sm: "100px",
  md: "200px",
  lg: "300px",
  xl: "400px",
};

interface SectionProps extends ComponentProps<"section"> {
  _size?: SizeType;
  _extension?: ExtensionType;
}

const Section: ParentComponent<SectionProps> = (props) => {
  return (
    <section
      {...props}
      style={{ "min-height": `calc(${sizes[props?._size || "screen"]} + ${extensions[props?._extension || "none"]})` }}>
      {props.children}
    </section>
  );
};

export default Section;
