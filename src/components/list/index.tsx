import { Item } from './item'
import './styles.scss'
import { Task } from '../../interfaces'

interface Props {
  tasks: Task[]
  selectTask: (selectedTask: Task) => void
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className='list'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            key={task.id}
            name={task.name}
            time={task.time}
            selected={task.selected}
            completed={task.completed}
            id={task.id}
            selectTask={selectTask}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List
