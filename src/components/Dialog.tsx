import { CircleX, FileCode2 } from "lucide-solid";
import { ComponentProps, JSX, VoidComponent } from "solid-js";
import { Button } from "./ui/Buttons/Button";

interface PreButtonsProps extends ComponentProps<"pre"> {}
export const PreButtons: VoidComponent<PreButtonsProps> = (props) => {
  return (
    <>
      <pre
        classList={
          (props.classList,
          { ["py-3 ps-16 pe-5 text-sm max-h-[75vh] overflow-y-scroll selection:bg-darkblue-300"]: true })
        }>
        {`import { type ComponentProps, type ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";
import { SliderPositionProvider, useSliderPosition } from "../Slider/Slider";

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
`}
      </pre>
    </>
  );
};

const Dialog = (props: { type: "buttons" & string }) => {
  const open: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    const dialog = currentTarget.nextElementSibling as HTMLDialogElement;
    dialog.showModal();
  };

  const close: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    const dialog = currentTarget.closest("dialog") as HTMLDialogElement;
    dialog.close();
  };

  return (
    <>
      <Button class="w-fit h-fit p-1 hover:text-neutral-50 translate-y-1" variant={"outline"} onClick={open}>
        <FileCode2 />
      </Button>
      <dialog class="mt-14 bg-darkblue-500 card text-neutral-100 backdrop-blur-sm">
        <button onClick={close} class="group absolute left-1 top-1">
          <CircleX class="text-rose-800  group-hover:animate-pulse" />
        </button>
        {props.type === "buttons" && <PreButtons />}
      </dialog>
    </>
  );
};

export default Dialog;
