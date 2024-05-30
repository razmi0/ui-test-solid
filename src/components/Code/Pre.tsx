import { CircleX } from "lucide-solid";
import { ComponentProps, JSX, VoidComponent } from "solid-js";
import Buttons from "../ui/Buttons/Button";

interface PreButtonsProps extends ComponentProps<"pre"> {}
export const PreButtons: VoidComponent<PreButtonsProps> = (props) => {
  return (
    <>
      <pre
        style={{ padding: "20px" }}
        classList={(props.classList, { ["text-sm max-h-56 overflow-y-scroll selection:bg-darkblue-300"]: true })}>
        {`
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
    
    interface ButtonProps extends ComponentProps<"button"> {}
    const Button: ParentComponent<ButtonProps> = (props) => {
      return (
        <button
          {...props}
          class=""
          classList={mergeProps(props.classList, {
            ["px-4 py-2 text-neutral-200 rounded-md card bg-cyan-900"]: true,
            ["active:bg-cyan-800"]: true,
            ["hover:bg-cyan-950 hover:text-neutral-300"]: true,
            ["focus:outline-offset-2 focus:outline-cyan-900"]: true,
            ["transition-all"]: true,
          })}>
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
      <Buttons.Button classList={{ ["w-fit"]: true }} variant={"outline"} onClick={open}>
        Code
      </Buttons.Button>
      {props.type === "buttons" && (
        <dialog class="mt-14 relative">
          <button onClick={close} class="group absolute top-0 right-0 mr-2 mt-2">
            <CircleX class="text-cyan-700 group-hover:animate-pulse " />
          </button>
          <PreButtons />
        </dialog>
      )}
    </>
  );
};

export default Dialog;
