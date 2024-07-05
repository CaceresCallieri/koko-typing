function getNewPhrase(phrases, setCurrentText, setInputText) {
  setCurrentText(phrases[Math.floor(Math.random() * phrases.length)]);
  setInputText("");
}

export default getNewPhrase;
