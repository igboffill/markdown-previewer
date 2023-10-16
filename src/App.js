
import './App.css';
import Previewer from './components/previewer';
import Editor from './components/editor';
import { useDispatch, useSelector } from 'react-redux';
import { changed } from './redux/store';
import Card from './components/card';

function App() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content)

  const editorOnChange = (event) => {
    dispatch(changed(event.target.value))
  }

  return (
    <div className="App">
      <div className='cell'>
        <Card title='Editor'>
          <Editor content={content} handleOnChange={editorOnChange} />
        </Card>
      </div>
      <div className='cell'>
        <Card title='Previewer'>
          <Previewer content={content} />
        </Card>
      </div>
    </div>
  );
}

export default App;
