import { FC } from 'react'

interface INewTodoFormProps{
    value:string,
    updateText:(str:string)=>void,
    handleAction:()=>void,
    handleKeyEnter:(e:any)=>void
}

const NewTodoForm:FC<INewTodoFormProps> = ({ value, updateText, handleAction,handleKeyEnter }) => {
    return (
      <label>
        <input
          placeholder='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
          onKeyDown={handleKeyEnter}
        />
        <button onClick={handleAction} onKeyDown={handleKeyEnter}>Add todo</button>
      </label>
    );
  };
  
  export default NewTodoForm;