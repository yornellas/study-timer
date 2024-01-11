import { Item } from './item'
import './styles.scss'


function List() {
  const tasks =[
    {
      name: 'React',
      time: '02:00:00'
    },
    {
      name: 'Typescript',
      time: '00:30:00'
    }
  ]

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