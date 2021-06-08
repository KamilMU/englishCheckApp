import React from 'react';
import {
  Container, Button, Text, ResultText
} from './styledComponents';
import DragDrop from './components/DragDrop';
import { checkTranslation } from './services';
import MainContent from './components/MainContent';
import { Word } from './types';

const russianWords = [
  { id: 7, text: 'хлеб' },
  { id: 2, text: 'ест' },
  { id: 1, text: 'Она' },
  { id: 6, text: 'едят' },
  { id: 5, text: 'они' },
  { id: 3, text: 'яблоко,' },
  { id: 4, text: 'а' },
];

const selectedWords: Word[] = [];

const id2List = {
  droppable: 'selected',
  droppable2: 'items'
};

const App = () => {
  const [englishWords] = React.useState([
    { id: 1, text: 'She is' },
    { id: 2, text: 'eating' },
    { id: 3, text: 'an apple' },
    { id: 4, text: 'and' },
    { id: 5, text: 'they are' },
    { id: 6, text: 'eating,' },
    { id: 7, text: 'bread' },
  ]);

  const [state, setState] = React.useState({
    items: russianWords,
    selected: selectedWords
  })
  const [translationResult, setTranslationResult] = React.useState('');
  const [translatedRight, setTranslatedRight] = React.useState(false);

  // function handleOnDragEnd(result: any) {
  //   console.log(result, 'result')
  //   if (!result.destination) return;

  //   const items = Array.from(russianWords);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   console.log(result.source.index, 'result.source.index')

  //   updateRussianWords(russianWords.filter((w, index) => result.source.index !== index))

  //   updateSelectedWords([...selectedWords, reorderedItem]);
  // }

  function getList(id: any) {
    return state[id2List[id]]
  }

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const r: any = {};
    r[droppableSource.droppableId] = sourceClone;
    r[droppableDestination.droppableId] = destClone;

    return r;
  };

  function onDragEnd(result: any) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let s = { items: items, selected: state.selected };

      if (source.droppableId === 'droppable') {
        s = { selected: items }
      }

      console.log(s, 'state')
      setState(s);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setState({
        items: result.droppable2,
        selected: result.droppable
      });
    }
  };



  return (
    <Container>
      <Text>Translate this sentence</Text>
      <MainContent englishWords={englishWords} />
      <DragDrop state={state} handleOnDragEnd={onDragEnd} />
      
      <ResultText style={{
        color: translatedRight ? 'green' : 'red'
      }}>
        {translationResult}
      </ResultText>

      <Button onClick={() => {
        checkTranslation(
          englishWords,
          state.selected,
          setTranslationResult,
          setTranslatedRight
        )
      }}>
        Check
      </Button>
    </Container>
  )
}

export default App;
