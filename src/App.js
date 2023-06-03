import { useEffect, useContext } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import TasksContext from './context/tasks';

function App() {



  //burada ihtiyacımız olan şey fetchData. useContexti importlayarak çağırıyoruz sonrasında içine contextimizin adını yazıyoruz çağırıyoruz. onun içindeki
  //fetchData yı kullanmak üzere çekşyoruz
  const {fetchData} = useContext(TasksContext)
  useEffect(() => {
    fetchData()
  },[])


  return (
    <div className="App">
      {/* value olarak atadıklarımızı sildik. Buradaki geçişleri props değil context ile yönetiyoruz */}
      <CreateTask/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  );
}

export default App;
