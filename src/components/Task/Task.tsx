import { FaRegTrashCan } from "react-icons/fa6";

type TaskProps = {
  deleteTaskHandler: (id: string) => void;
  item: {title : string, id: string};
};

const Task: React.FC<TaskProps> = ( { deleteTaskHandler, item }) => {
  return (
    <div className="task" draggable={true}>
      <span>{item.title}</span>
      <div className="task-icons">
        <FaRegTrashCan className="delete-icon" onClick={() => deleteTaskHandler(item.id)}/>
      </div>
    </div>
  );
};

export default Task;
