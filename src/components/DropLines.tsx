import React from 'react';
import { DropLine } from '../styledComponents';

interface Props {
  provided: any
}

const lines = [1, 2];

const DropLines: React.FC<Props> = ({ provided }) => {
  return (
    <>
      {lines.map((line, index) => (
        <DropLine key={index}
          {...provided.droppableProps}
          ref={provided.innerRef}></DropLine>
      ))}
    </>
  )
}

export default DropLines;
