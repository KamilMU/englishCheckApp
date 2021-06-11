import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Item } from '../styledComponents';
import { Word } from '../types';

interface Props {
  index: number
  word: Word
  id: number
}

const DraggableWord: React.FC<Props> = ({ id, index, word }) => {
  return (
    <>
      <Draggable
        index={index}
        key={index}
        draggableId={(id).toString()}>
        {(provided: any, snapshot) => (
          <>
            <Item
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}
              ref={provided.innerRef}>
              {word?.text}
            </Item>

            {provided.placeholder}
          </>
        )}
      </Draggable>
    </>
  )
}

export default DraggableWord;
