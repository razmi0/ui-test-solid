import { type ComponentProps, type ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";
import { SliderPositionProvider, useSliderPosition } from "../Slider/Slider";

interface ButtonElementInterface extends HTMLButtonElement {
  dataset: { button: "button"; active: "false" | "true"; index: string };
}

interface ButtonGroupProps extends ComponentProps<"div"> {}
const ButtonGroup: ParentComponent<ButtonGroupProps> = (props) => {
  return (
    <SliderPositionProvider>
      <div data-button="group" classList={props.classList} class={twMerge("relative space-x-3")}>
        {props.children}
      </div>
    </SliderPositionProvider>
  );
};

type VariantType = "outline" | "solid";
interface ButtonProps extends ComponentProps<"button"> {
  variant?: VariantType;
}
const variants = {
  solid: "bg-cyan-900 hover:bg-cyan-950 card",
  outline: "hover:bg-cyan-300/20 hover:text-neutral-300 card border border-cyan-900",
  cl: function (variant: VariantType = "solid") {
    return this[variant];
  },
};

const Button: ParentComponent<ButtonProps> = (props) => {
  const { updatePosition } = useSliderPosition();

  const handleClick = (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => {
    updatePosition(e);
    typeof props.onClick === "function" && props.onClick(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      data-button="button"
      classList={props.classList}
      class={twMerge(
        "px-4 py-2 text-neutral-200 rounded-md w-fit",
        "active:bg-cyan-800",
        "hover:text-neutral-300",
        "focus:bg-cyan-800 focus:outline-none",
        "transition-all",
        variants.cl(props.variant),
        props.class
      )}>
      {props.children}
    </button>
  );
};

export { Button, ButtonGroup };
