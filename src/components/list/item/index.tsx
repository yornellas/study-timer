import { Task } from '../../../interfaces'
import './styles.scss'

interface Props extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(props: Props) {
  return (
    <li
      className={`item ${props.selected ? 'selectedItem' : ''}`}
      onClick={() => props.selectTask(props)}
    >
      <h3>{props.name}</h3>
      <span>{props.time}</span>
    </li>
  )
}
