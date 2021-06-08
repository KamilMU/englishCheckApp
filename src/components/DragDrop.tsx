import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Item, DropLine, List } from '../styledComponents';
import DropLines from './DropLines';
import { State, Word } from '../types';
import DraggableWord from './DraggableWord';

interface Props {
  state: State
  handleOnDragEnd: (result: any) => void
}

export const DragDrop: React.FC<Props> = ({ state, handleOnDragEnd }) => {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided: any, snapshot) => (
          <>
            <DropLine
              isdraggingover={snapshot.isDraggingOver.toString()}
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {state?.selected?.map((selectedWord, index: number) => (
                <DraggableWord
                  word={selectedWord}
                  index={index}
                  key={selectedWord.id}
                  id={selectedWord.id}
                />
              ))}

              {provided.placeholder}
            </DropLine>
          </>
        )}

      </Droppable>
      <Droppable droppableId="droppable2" direction="horizontal">
        {(provided: any, snapshot) => (
          <>
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {state?.items?.map((word, index: number) => (
                <DraggableWord
                  word={word}
                  index={index}
                  key={word.id}
                  id={word.id}
                />
              ))}

              {provided.placeholder}
            </List>
          </>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragDrop;
