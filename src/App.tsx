import React from 'react';
import {
  Container, Button, Tittle, ResultText
} from './styledComponents';
import DragDrop from './components/DragDrop';
import { checkTranslation } from './services';
import MainContent from './components/MainContent';
import { Word } from './types';

const russianWords = [
  { id: 7, text: 'хлеб', moved: false },
  { id: 2, text: 'ест', moved: false },
  { id: 1, text: 'Она', moved: false },
  { id: 6, text: 'едят', moved: false },
  { id: 5, text: 'они', moved: false },
  { id: 3, text: 'яблоко,', moved: false },
  { id: 4, text: 'а', moved: false },
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

  function getList(id: any) {
    return state[id2List[id]]
  }

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    // // move back
    // const items = [...state.items]
    // if (result) {
    //   setTimeout(() => setState({ ...state, items: items }), 1000);
    // }
    // // ?

    return result;
  };

  const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);
    // setTimeout(() => destClone.splice(removed.id, 1), [...sourceClone, removed], 1000)
    const r: any = {};
    r[droppableSource.droppableId] = sourceClone;
    r[droppableDestination.droppableId] = destClone;

    return r;
  };

  function onDragEnd(result: any) {
    const { source, destination, droppableSource } = result;

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

      let newState = {
        items: items,
        selected: state.selected
      };

      if (source.droppableId === 'droppable') {
        newState = { selected: items }
      }

      // if (source.droppableId === 'droppable' && destination.droppableId === 'droppable2') {
      //   const items = [...state.items]
      //   setTimeout(() => setState({
      //     ...state,
      //     items: items
      //   }), 1000);
      // }

      setState(newState);
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


  function onDragStart(draggedItem: any) {
    setState({
      ...state,
      items: state.items?.map((item) => {
        if (item.id.toString() === draggedItem.draggableId) {
          return {
            ...item,
            moved: true
          }
        }

        return item
      })
    })
  }

  return (
    <Container>
      <Tittle>Translate this sentence</Tittle>
      <MainContent englishWords={englishWords} />
      <DragDrop state={state} handleOnDragEnd={onDragEnd} onDragStart={onDragStart} />

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
