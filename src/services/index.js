export function checkTranslation(wordsToTranslate, translatedWords, setResult, setTranslatedRight) {
  let succes = false;

  if (wordsToTranslate.length === translatedWords.length) {
    wordsToTranslate.map(wordToTranslate => {
      translatedWords.map(translatedWord => {
        console.log(wordToTranslate.id, translatedWord.id, 'wordToTranslate.id === translatedWord.id')
        if (wordToTranslate.id === translatedWord.id) {
          setResult('Succes');
          setTranslatedRight(true);
          succes = true;
        } else {
          setResult('Something wrong!');
          setTranslatedRight(false);
          succes = false;
        }
      })
    })

  } else {
    setResult('Something wrong!');
    setTranslatedRight(false);
  }

  if (succes) {
    speak(translatedWords);
  }
}

function speak(words) {
  for (var i = 0; i < words.length; i++) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = words[i].text;

    window.speechSynthesis.speak(msg);
  }

}
