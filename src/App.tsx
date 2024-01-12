import style from  './styles.module.scss'
import Form from './components/form';
import List from './components/list';
import { Timer } from './components/timer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
