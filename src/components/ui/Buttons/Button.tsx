import type { ComponentProps, ParentComponent } from "solid-js";
import { mergeProps } from "solid-js";

interface ButtonProps extends ComponentProps<"button"> {}

const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      classList={mergeProps(props.classList, {
        ["px-4 py-2 text-neutral-200 rounded-md card bg-cyan-900"]: true,
        ["active:bg-cyan-800"]: true,
        ["hover:bg-cyan-950 hover:text-neutral-300"]: true,
        ["focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:ring-offset-1 focus:ring-offset-transparent"]: true,
        ["transition-all"]: true,
      })}>
      {props.children}
    </button>
  );
};

export default Button;
