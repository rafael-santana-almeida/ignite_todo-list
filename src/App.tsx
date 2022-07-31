import { Todo } from './Components/Todo';
import { Header } from './Components/Header';
import { NewTodoForm } from './Components/NewTodoForm';

import styles from './App.module.css';

import './global.css';
import { useState } from 'react';
import { NoContent } from './Components/NoContent';

interface Todo {
  id: number;
  title: string;
  isFinished: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTodoForm />

        <main className={styles.main}>
          <header>
            <div>Tarefas criadas <span>5</span></div>
            <div>Concluídas <span>2 de 5</span></div>            
          </header>

          {todos.length > 0 ? (
            <ul>
              <Todo />
            </ul>
          ) : <NoContent /> }
        </main>
      </div>
    </>
  )
}
