import { FaRegTrashCan } from "react-icons/fa6";

const Task: React.FC = () => {
  return (
    <div className="task">
      <span>gergre</span>
      <div className="task-icons">
        <FaRegTrashCan className="delete-icon"/>
      </div>
    </div>
  );
};

export default Task;
