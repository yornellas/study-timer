import style from  './styles.module.scss'
import Form from './components/form';
import List from './components/list';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
