const AddTask: React.FC = () => {
    return (
      <div className="add-task">
        <form onSubmit={(e) => {e.preventDefault();}}>
          <input type="text" name="task" className="input-task" onChange={() => {}} placeholder="Add new task" />
          <button className="submit-btn">ADD</button>
        </form>
      </div>
    );
  };
  
  export default AddTask;
  