import "./App.css";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

import phrases from "./phrases";
import Letter from "./components/Letter";
import InputCues from "./components/InputCues";

function App() {
  const [currentText, setCurrentText] = useState<string>(() => {
    return phrases[Math.floor(Math.random() * phrases.length)];
  });

  const [inputText, setInputText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const enterInputCueRef = useRef<HTMLInputElement | null>(null);

  function controlInput(event: ChangeEvent<HTMLInputElement>) {
    if (
      inputText.length >= currentText.length && // Don't allow to keep writing at the end of the text
      event.target.value.length >= inputText.length // Allow backspaces at the end
    )
      return;

    setInputText(event.target.value);
  }

  function checkSpecialKeys(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      // Add and remove classes for animation
      enterInputCueRef.current?.classList.add("active");
      setTimeout(() => {
        enterInputCueRef.current?.classList.remove("active");
      }, 200);

      setInputText("");
      setCurrentText(phrases[Math.floor(Math.random() * phrases.length)]);
    }
  }

  // On keypress down, focus input
  window.addEventListener("keydown", () => inputRef.current?.focus());

  return (
    <>
      <header>Koko Typing</header>
      <main>
        <p className="text">
          {currentText.split("").map((textCharacter, index) => {
            const inputCharacter = inputText[index];
            const isActive = index === inputText.length ? true : false;

            // Incorrect character or no inputCharacter
            if (textCharacter !== inputCharacter) {
              return (
                <Letter
                  textCharacter={textCharacter}
                  inputCharacter={inputCharacter}
                  isCorrect={false}
                  isActive={isActive}
                  key={index}
                />
              );
            }

            // Correct character
            return (
              <Letter
                textCharacter={textCharacter}
                inputCharacter={inputCharacter}
                isCorrect={true}
                isActive={isActive}
                key={index}
              />
            );
          })}
        </p>

        <input
          autoFocus
          type="text"
          value={inputText}
          onChange={controlInput}
          onKeyDown={checkSpecialKeys}
          ref={inputRef}
        />
      </main>

      <InputCues enterInputCueRef={enterInputCueRef} />
    </>
  );
}

export default App;
