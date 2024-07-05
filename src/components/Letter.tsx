interface LetterProps {
  textCharacter: string;
  inputCharacter: string;
  isCorrect: boolean;
  isActive: boolean;
}

const Letter = ({
  textCharacter,
  inputCharacter,
  isCorrect,
  isActive,
}: LetterProps) => {
  const isSpace =
    textCharacter === " " && inputCharacter !== " " ? true : false;

  if (!inputCharacter) {
    return (
      <span className={`${isActive ? "active" : ""}`}>{textCharacter}</span>
    );
  }

  return (
    <span
      className={`${isCorrect ? "correct-character" : "incorrect-character"} 
                  ${isActive ? "active" : ""}
                  ${isSpace ? "red-underline" : ""}`}
    >
      {textCharacter}
    </span>
  );
};

export default Letter;
