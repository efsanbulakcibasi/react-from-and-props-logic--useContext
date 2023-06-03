import { useState } from "react";
import CreateTask from "./CreateTask";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskShow({ task }) {
  const [show, setShow] = useState(false);
  const handleDeleteClick = () => {
    //onDelete(task.id);
    deleteTaskById(task.id)
  };

  const handleEditClick = () => {
    setShow(true);
  };
  const handleSubmit = (id,updateTitle,updateDate,updateDesc) => {
    setShow(false);
    //onUpdate(id,updateTitle,updateDate,updateDesc)
    editTaskById(id,updateTitle,updateDate,updateDesc);
  }
  const {editTaskById,deleteTaskById} = useContext(TasksContext)
  return (
    <div className="task-show">
      {
      show ? 
      (
        <CreateTask task={task} taskFromEdit={true}/>
      ) : 
      (
        <div>
          <h3 className="task-title">Görev</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Bitiş Tarihi</h3>
          <span className="task-span">{task.date}</span>
          <h3 className="task-title">Açıklama</h3>
          <p> {task.desc}</p>
          <div className="icons">
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default TaskShow;
