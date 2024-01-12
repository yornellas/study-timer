import Button from "../button";
import { Clock } from "./clock";
import './styles.scss'

export function Timer() {
  return (
    <div className="timer">
      <p className="title">
        Escolha um card e inicie o cronômetro
      </p>
      <div className="clock-container">
        <Clock />
      </div>
      <Button
        text="Começar"
      />
    </div>
  )
}
