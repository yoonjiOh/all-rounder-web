import { Draggable } from "react-beautiful-dnd";

interface Props {
  item: string;
  index: number;
}

const DraggableItem: React.FC<Props> = ({ item, index }) => {
  return (
    <Draggable draggableId={item} index={index} key={item}>
      {(draggableProvided, draggableSnapshot) => (
        <div
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          ref={draggableProvided.innerRef}
        >
          {item}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
