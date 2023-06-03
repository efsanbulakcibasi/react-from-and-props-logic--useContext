import TaskShow from "./TaskShow";
import TasksContext from "../context/tasks";
import { useContext } from "react";

function TaskList() {

    const {task} = useContext(TasksContext)
    return ( 
        <div  className="task-list">
            {
                task.map((task,index) =>{
                    //aynı şekilde taskı çektiğimiz için propsa gerek yok ama key ve task için props kullanıyoruz.
                    //useContext ve propsları birlikte kullanabiliriz. map yaptığımız için alto comp giderken kullanmamız gerekir
                    return <TaskShow key={index} task={task}  />
                })
            }
        </div>
     );
}

export default TaskList;