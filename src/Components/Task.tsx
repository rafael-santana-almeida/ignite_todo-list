import { Circle, Trash, CheckCircle } from "phosphor-react";

import { TaskType } from "../App";

import styles from './Task.module.css'

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: string) => void;
  onToggleTaskStatus: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onToggleTaskStatus }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleToggleTaskStatus() {
    onToggleTaskStatus(task.id);
  }

  return (
    <li className={`${styles.task} ${task.isDone && styles.disabled}`}>
      <button type='button' onClick={handleToggleTaskStatus}>
        {task.isDone 
          ? <CheckCircle className={styles.checked} size={20} weight='fill' /> 
          : <Circle size={20} />}
      </button>

      <p>{task.title}</p>

      <button type='button' onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </li>
  );
}