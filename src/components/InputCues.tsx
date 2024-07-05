import { LegacyRef } from "react";
import "./InputCues.css";

interface InputCuesProps {
  enterInputCueRef: LegacyRef<HTMLDivElement>;
}

const InputCues = ({ enterInputCueRef }: InputCuesProps) => {
  return (
    <section className="input-cues">
      <div className="input-cue">
        <div className="key" ref={enterInputCueRef}>
          Enter
        </div>
        <p>&nbsp;- Get next phrase</p>
      </div>
    </section>
  );
};

export default InputCues;
