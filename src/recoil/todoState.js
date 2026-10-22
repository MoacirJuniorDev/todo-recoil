import { atom, selector } from 'recoil';

// Átomo para armazenar a lista de tarefas
export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, text: 'Aprender Recoil', isComplete: true },
    { id: 2, text: 'Criar átomos e seletores', isComplete: false },
  ],
});

// Átomo para armazenar o filtro atual ('todas', 'concluidas', 'pendentes')
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'todas',
});

// Seletor que calcula a lista filtrada em tempo real
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'concluidas':
        return list.filter((item) => item.isComplete);
      case 'pendentes':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});