import './styles.scss'

export function Item(props: { name: string, time: string }) {
  return (
    <li className='item'>
      <h3>{ props.name }</h3>
      <span>{ props.time }</span>
    </li>
  )
}