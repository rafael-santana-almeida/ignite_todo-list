import { Circle, Trash } from 'phosphor-react';

import { NewTodoForm } from './Components/NewTodoForm';
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css';

export function App() {
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

          <ul>
            <li>
              <button type='button'>
                <Circle size={20}/>
              </button>

              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

              <button type='button'>
              <Trash size={20}/>
              </button>
            </li>

            <li>
              <button type='button'>
                <Circle size={20}/>
              </button>

              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
              
              <button type='button'>
              <Trash size={20}/>
              </button>
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}
