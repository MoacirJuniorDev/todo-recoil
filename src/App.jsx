import { RecoilRoot, useRecoilValue } from 'recoil';
import { filteredTodoListState } from './recoil/todoState';
import { TodoItemCreator } from './components/TodoItemCreator';
import { TodoFilters } from './components/TodoFilters';
import { TodoItem } from './components/TodoItem';
import './App.css';

function MainApp() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="container">
      <header>
        <h1>Lista de Tarefas (Recoil)</h1>
      </header>

      <TodoItemCreator />
      <TodoFilters />

      <ul className="todo-list">
        {todoList.length > 0 ? (
          todoList.map((todo) => <TodoItem key={todo.id} item={todo} />)
        ) : (
          <p className="empty">Nenhuma tarefa encontrada.</p>
        )}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}