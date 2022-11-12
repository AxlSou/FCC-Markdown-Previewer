import './App.css';
import Markdown from 'marked-react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from './features/markedDown'

function App() {

  const { string } = useSelector((store) => store.marked)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className='input'>
        <div className='title'>Editor</div>
        <textarea id='editor' onChange={(e) => {dispatch(change(e.currentTarget.value))}}>{string}</textarea>
      </div>
      <div className='preview-container'>
      <div className='title previewer'>Previewer</div>
        <div id='preview'>
          <Markdown>{string}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
