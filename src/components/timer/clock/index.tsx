import './styles.scss'

interface Props {
  time: number | undefined
}
export function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0')
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className="number">{ minuteTen }</span>
      <span className="number">{ minuteUnit }</span>
      <span>:</span>
      <span className="number">{ secondTen }</span>
      <span className="number">{ secondUnit }</span>
    </>
  )
}