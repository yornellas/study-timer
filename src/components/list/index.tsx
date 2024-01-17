import { Item } from './item'
import './styles.scss'
import { Task } from '../../interfaces'

function List({ tasks }: { tasks: Task[] }) {
  return (
    <aside className='list'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item
          key={ index }
            name={ task.name }
            time={ task.time }
          />
        ))}
      </ul>
    </aside>
  )
}

export default List