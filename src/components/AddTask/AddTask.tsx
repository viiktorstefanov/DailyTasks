import { useState } from "react";

type TaskProps = {
  addTaskHandler: ( taskTitle: string) => void;
};

const AddTask: React.FC<TaskProps> = ({ addTaskHandler }) => {

  const [taskTitle, setTaskTitle ] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTaskTitle(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTaskHandler(taskTitle);

    setTaskTitle('');
  };

  return (
    <div className="add-task">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="task"
          className="input-task"
          onChange={onChange}
          value={taskTitle}
          placeholder="Add new task"
        />
        <button className="submit-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTask;
