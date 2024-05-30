import { twMerge } from "tailwind-merge";
import type { ComponentProps, ParentComponent } from "solid-js";
import { mergeProps } from "solid-js";

const Root: ParentComponent = (props) => {
  return <>{props.children}</>;
};

interface ButtonGroupProps extends ComponentProps<"div"> {}
const ButtonGroup: ParentComponent<ButtonGroupProps> = (props) => {
  return (
    <div
      classList={mergeProps(props.classList, {
        ["space-x-3"]: true,
      })}>
      {props.children}
    </div>
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
  return (
    <button
      {...props}
      classList={props.classList}
      class={twMerge(
        "px-4 py-2 text-neutral-200 rounded-md w-fit",
        "active:bg-cyan-800",
        "hover:text-neutral-300",
        "focus:outline-offset-2 focus:outline-cyan-900",
        "transition-all",
        variants.cl(props.variant),
        props.class
      )}>
      {props.children}
    </button>
  );
};

const Buttons = {
  Root,
  Button,
  ButtonGroup,
};

export default Buttons;
