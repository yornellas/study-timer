import style from './styles.module.scss'
import Form from './components/form'
import List from './components/list'
import { Timer } from './components/timer'
import { useState } from 'react'
import { Task } from './interfaces'

function App() {
  const [tasks, setTask] = useState<Task[]>([])
  const [selected, setSelected] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask)
    setTask((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    )
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer />
    </div>
  )
}

export default App
