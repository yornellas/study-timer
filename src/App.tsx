import style from './styles.module.scss'
import Form from './components/form'
import List from './components/list'
import { Timer } from './components/timer'
import { useState } from 'react'
import { Task } from './interfaces'

function App() {
  const [tasks, setTask] = useState<Task[]>([])
  const [selectedTask, setSelectedTask] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelectedTask(selectedTask)
    setTask((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    )
  }

  function finalizeTask() {
    if (!selectedTask) return

    setSelectedTask(undefined)
    setTask((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === selectedTask.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }

        return task
      })
    )
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selectedTask={selectedTask} finalizeTask={finalizeTask} />
    </div>
  )
}

export default App
