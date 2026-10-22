import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/todoState';

export function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className="todo-filters">
      <button
        className={filter === 'todas' ? 'active' : ''}
        onClick={() => setFilter('todas')}
      >
        Todas
      </button>
      <button
        className={filter === 'pendentes' ? 'active' : ''}
        onClick={() => setFilter('pendentes')}
      >
        Pendentes
      </button>
      <button
        className={filter === 'concluidas' ? 'active' : ''}
        onClick={() => setFilter('concluidas')}
      >
        Concluídas
      </button>
    </div>
  );
}