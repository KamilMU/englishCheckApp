export function checkTranslation(wordsToTranslate, translatedWords, setResult, setTranslatedRight) {
  wordsToTranslate.map(wordToTranslate => {
    translatedWords.map(translatedWord => {
      if (wordToTranslate.id === translatedWord.id) {
        setResult('Succes');
        setTranslatedRight(true);
      } else {
        setResult('Something wrong!');
        setTranslatedRight(false);
      }
    })
  })

  setTimeout(() => setResult(''), 1200);
}