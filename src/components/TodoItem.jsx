import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoState';

export function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const updatedList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(updatedList);
  };

  const deleteItem = () => {
    const updatedList = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(updatedList);
  };

  return (
    <li className={`todo-item ${item.isComplete ? 'completed' : ''}`}>
      <span onClick={toggleItemCompletion}>{item.text}</span>
      <button onClick={deleteItem} className="btn-remove">
        Remover
      </button>
    </li>
  );
}