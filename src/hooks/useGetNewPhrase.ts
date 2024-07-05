import { useEffect } from "react";

function useGetNewPhrase(
  phrases: Array<string>,
  setCurrentText: React.Dispatch<React.SetStateAction<string>>,
  setInputText: React.Dispatch<React.SetStateAction<string>>,
) {
  useEffect(() => {
    function keyDownHandler(event: KeyboardEvent) {
      if (event.key === "Enter") {
        // Get new phrase and delete input
        setCurrentText(phrases[Math.floor(Math.random() * phrases.length)]);
        setInputText("");
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [phrases, setCurrentText, setInputText]);
}

export default useGetNewPhrase;
