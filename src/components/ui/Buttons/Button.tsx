import { useContext, type ComponentProps, type ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";
import { SliderPositionContext, SliderPositionProvider } from "../Slider/Slider";

interface ButtonElementInterface extends HTMLButtonElement {
  dataset: { button: "button"; active: "false" | "true"; index: string };
}

// ResolvedJSXElement sanitization functions
// --

const validButton = (element?: unknown): element is ButtonElementInterface => {
  const valid = element instanceof HTMLButtonElement && element.dataset.button === "button";
  !valid && console.warn("Element is not a Button : ", element);
  return valid;
};

// --

interface ButtonGroupProps extends ComponentProps<"div"> {}
const ButtonGroup: ParentComponent<ButtonGroupProps> = (props) => {
  // const resolved = children(() => props.children)
  //   .toArray()
  //   .map((child, index) => {
  //     validButton(child) && (child.dataset.index = index.toString());
  //     return child;
  //   });
  return (
    <SliderPositionProvider>
      <div
        data-button="group"
        // data-length={resolved.length}
        classList={props.classList}
        class={twMerge("relative space-x-3")}>
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
  const updatePosition = useContext(SliderPositionContext)?.updatePosition;

  const handleClick = (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => {
    updatePosition && updatePosition(e);
    typeof props.onClick === "function" && props.onClick(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      data-button="button"
      data-index="0"
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
