import { ReactNode } from "react";
import "./Strikethrough.scss";

type StrikethroughProps = {
  condition: boolean;
  children: ReactNode;
};

export default function Strikethrough(props: StrikethroughProps) {
  return (
    <div className="Strikethrough">
      <span
        className={`Strikethrough-content${props.condition ? "-closed" : ""}`}
      >
        {props.children}
      </span>
      <div className="Strikethrough-line" hidden={!props.condition}></div>
    </div>
  );
}
