import {
  createContext,
  createSignal,
  useContext,
  type Accessor,
  type ComponentProps,
  type ParentComponent,
  type VoidComponent,
} from "solid-js";
import { twMerge } from "tailwind-merge";

interface SliderProps extends ComponentProps<"div"> {}
const Slider: VoidComponent<SliderProps> = (props) => {
  const { position } = useSliderPosition();

  return (
    <div
      style={{
        left: position && position().left + "px",
        top: position && position().top + "px",
        width: position && position().width + "px",
        height: position && position().height + "px",
      }}
      class={twMerge(
        "absolute transition-all outline-cyan-800 outline-double rounded-lg !m-0 pointer-events-none",
        props.class
      )}
      classList={props.classList}
      data-slider="true"></div>
  );
};

type PositionType = { left: number; top: number; width: number; height: number };
const initialPosition: PositionType = { left: 0, top: 0, width: 0, height: 0 };
type SliderContextType = {
  position: Accessor<PositionType>;
  updatePosition: (e: MouseEvent) => void | (() => void);
};

const initialContext: SliderContextType = {
  position: () => initialPosition,
  updatePosition: () => {
    console.log("No context mounted");
  },
};
export const SliderPositionContext = createContext<SliderContextType>(initialContext);
export const SliderPositionProvider: ParentComponent<{ initial?: PositionType }> = (props) => {
  const [position, setPosition] = createSignal(props.initial || initialPosition);

  const updatePosition = (e: MouseEvent) => {
    const element = e.currentTarget as HTMLElement;
    setPosition({
      left: element.offsetLeft,
      top: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
    console.log("position", position());
  };

  return (
    <SliderPositionContext.Provider value={{ position, updatePosition }}>
      {props.children}
    </SliderPositionContext.Provider>
  );
};

export const useSliderPosition = () => {
  const context = useContext(SliderPositionContext);
  return context;
};

export default Slider;
