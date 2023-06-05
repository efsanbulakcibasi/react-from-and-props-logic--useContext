import { useContext } from "react";
import { useState } from "react";
import TasksContext from "../context/tasks";

function CreateTask({ task, taskFromEdit,onUpdate,setShow}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [date, setDate] = useState(task ? task.date : "");
  const [desc, setDesc] = useState(task ? task.desc : "");

  const {onCreate} = useContext(TasksContext)

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFromEdit) {
      onUpdate(task.id,title,date,desc)
      //editTaskById(task.id,title,date,desc)
    }
    else{
        onCreate(title, date, desc);
    }
    setTitle("");
    setDate("");
    setDesc("");
  };
  return (
    <div>
      {taskFromEdit ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              className="task-input"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <label className="task-label">Tarihi düzenleyiniz</label>
            <input className="dateLittle" type="date" value={date} onChange={handleDateChange} />
            <label>Taskı düzenleyiniz</label>
            <textarea
              className="task-input"
              rows={10}
              value={desc}
              onChange={handleDescChange}
            />
            <div className="button-edits">
            <button className=" task-button giveUp" onClick={() => {setShow(false)}}>Vazgeç</button>
            <button className="task-button update-button" onClick={handleSubmit}>
              Düzenle
            </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfe Task Giriniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <label  className="task-label">Tarih</label>
            <input className="date" type="date" value={date} onChange={handleDateChange} />
            <label>Task Giriniz</label>
            <textarea
              className="task-input"
              rows={10}
              value={desc}
              onChange={handleDescChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Ekle
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
