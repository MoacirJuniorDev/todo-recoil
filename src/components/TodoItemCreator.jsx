import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoState';

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <form onSubmit={addItem} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}