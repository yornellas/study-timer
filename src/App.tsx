import style from  './styles.module.scss'
import Form from './components/form';
import List from './components/list';
import { Timer } from './components/timer';
import { useState } from 'react';
import { Task } from './interfaces';

function App() {
  const [tasks, setTask]: [Task[], any] = useState([])

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
