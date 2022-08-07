import {useState, useEffect} from 'react';
import { useAppDispatch,useAppSelector } from './hooksRedux/hooks';

import { fetchTodos,addNewTodo } from './store/slice/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const {error,loading}=useAppSelector(state=>state.todos)

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  }
  const handleKeyEnter:React.KeyboardEventHandler<HTMLInputElement>=(e)=>{
      if(e.key==="Enter"){
        handleAction()
      }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
        handleKeyEnter={handleKeyEnter}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
