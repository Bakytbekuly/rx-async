import { useAppDispatch } from '../hooksRedux/hooks';
import {toggleStatus, deleteTodo} from '../store/slice/todoSlice';

interface ITodoItemProps{
    id:string,
    title:string,
    completed:boolean
}

const TodoItem:React.FC<ITodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;