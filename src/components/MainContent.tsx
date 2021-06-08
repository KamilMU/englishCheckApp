import React from 'react';
import { Image, Main, WordsToTranslate, WordToTranslate } from '../styledComponents';
import { Word } from '../types';

interface Props {
  englishWords: Word[]
}

export const MainContent: React.FC<Props> = ({ englishWords }) => {
  return (
    <Main>
      <Image src="http://simpleicon.com/wp-content/uploads/user1.png" alt="" />
      <WordsToTranslate>
        {englishWords.map(w =>
          <WordToTranslate key={w.id}>{w.text}</WordToTranslate>
        )}
      </WordsToTranslate>
    </Main>
  )
}

export default MainContent;
