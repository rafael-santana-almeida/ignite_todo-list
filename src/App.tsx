import { useState } from 'react';
import { v4  as uuidV4} from 'uuid';

import { Todo } from './Components/Todo';
import { Header } from './Components/Header';
import { NoContent } from './Components/NoContent';
import { NewTodoForm } from './Components/NewTodoForm';

import styles from './App.module.css';

import './global.css';

export interface TodoType {
  id: string;
  title: string;
  isDone: boolean;
}

export function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function handleCreateNewTodo(title: string) {
    const newTodo = {
      id: uuidV4(),
      title,
      isDone: false
    };

    setTodos(state => [...state, newTodo]);
  }

  function handleDeleteTodo(todoId: string) {
    const todosWithoutDeleted = todos.filter(todo => todo.id !== todoId);
    
    setTodos(todosWithoutDeleted);
  }

  function handleToggleTodoStatus(todoId: string) {
    const todosWithStatusUpdated = todos.map(todo => {
      if (todo.id === todoId) {
        return {...todo, isDone: !todo.isDone}
      }

      return todo;
    });

    setTodos(todosWithStatusUpdated);
  }

  const progress = todos.reduce((acc, curr) => {
    if (curr.isDone) {
      return acc += 1;
    }

    return acc
  }, 0);
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTodoForm onCreateTodo={handleCreateNewTodo}/>

        <main className={styles.main}>
          <header>
            <div>Tarefas criadas <span>{todos.length}</span></div>
            <div>
              Concluídas
              <span>
                {todos.length === 0 
                  ? todos.length 
                  : `${progress} de ${todos.length}`}
              </span>
            </div>
          </header>

          {todos.length > 0 && (
            <ul>
              {todos.map(todo => (
                <Todo 
                  key={todo.id}
                  todo={todo}
                  onDeleteTodo={handleDeleteTodo}
                  onToggleTodoStatus={handleToggleTodoStatus}
                />
              ))}
            </ul>
          )}

          {todos.length === 0 && <NoContent />}
        </main>
      </div>
    </>
  )
}
