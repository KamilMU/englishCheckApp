import React from 'react';
import { DragDropContext, Draggable, DragStart, Droppable, ResponderProvided } from 'react-beautiful-dnd';
import { Item, DropLine, List } from '../styledComponents';
import DropLines from './DropLines';
import { State, Word } from '../types';
import DraggableWord from './DraggableWord';

interface Props {
  state: State
  handleOnDragEnd: (result: any) => void
  onDragStart: (initial: DragStart, provided?: ResponderProvided) => void
}

export const DragDrop: React.FC<Props> = ({ state, handleOnDragEnd, onDragStart }) => {
  return (
    <DragDropContext onDragStart={(e) => onDragStart(e)} onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided: any, snapshot) => (
          <>
            <DropLine {...provided.droppableProps}
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
                <>
                  {word.moved && (
                    <div style={{
                      width: "40px",
                      height: "20px",
                      borderRadius: '4px',
                      boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset'
                    }}
                    />)}
                  <DraggableWord
                    word={word}
                    index={index}
                    key={word.id}
                    id={word.id}
                  />
                </>
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
