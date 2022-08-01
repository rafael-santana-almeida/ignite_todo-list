import { useState } from 'react';
import { v4  as uuidV4} from 'uuid';

import { Task } from './Components/Task';
import { Header } from './Components/Header';
import { NoContent } from './Components/NoContent';
import { NewTaskForm } from './Components/NewTaskForm';

import styles from './App.module.css';

import './global.css';

export interface TaskType {
  id: string;
  title: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleCreateNewTask(title: string) {
    const newTask = {
      id: uuidV4(),
      title,
      isDone: false
    };

    setTasks(state => [...state, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeleted = tasks.filter(task => task.id !== taskId);
    
    setTasks(tasksWithoutDeleted);
  }

  function handleToggleTaskStatus(taskId: string) {
    const tasksWithStatusUpdated = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isDone: !task.isDone}
      }

      return task;
    });

    setTasks(tasksWithStatusUpdated);
  }

  const progress = tasks.reduce((acc, curr) => {
    if (curr.isDone) {
      return acc += 1;
    }

    return acc
  }, 0);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskForm onCreateTask={handleCreateNewTask}/>

        <main className={styles.main}>
          <header>
            <div>Tarefas criadas <span>{tasks.length}</span></div>
            <div>
              Concluídas
              <span>
                {tasks.length === 0 
                  ? tasks.length 
                  : `${progress} de ${tasks.length}`}
              </span>
            </div>
          </header>

          {tasks.length > 0 && (
            <ul>
              {tasks.map(task => (
                <Task 
                  key={task.id}
                  task={task}
                  onDeleteTask={handleDeleteTask}
                  onToggleTaskStatus={handleToggleTaskStatus}
                />
              ))}
            </ul>
          )}

          {tasks.length === 0 && <NoContent />}
        </main>
      </div>
    </>
  )
}
