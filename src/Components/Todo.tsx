import { Circle, Trash, CheckCircle } from "phosphor-react";

import { TodoType } from "../App";

import styles from './Todo.module.css'

interface TodoProps {
  todo: TodoType;
  onDeleteTodo: (todoId: string) => void;
  onToggleTodoStatus: (todoId: string) => void;
}

export function Todo({ todo, onDeleteTodo, onToggleTodoStatus }: TodoProps) {
  function handleDeleteTodo() {
    onDeleteTodo(todo.id)
  }

  function handleToggleTodoStatus() {
    onToggleTodoStatus(todo.id);
  }

  return (
    <li className={`${styles.todo} ${todo.isDone && styles.disabled}`}>
      <button type='button' onClick={handleToggleTodoStatus}>
        {todo.isDone 
          ? <CheckCircle className={styles.checked} size={20} weight='fill' /> 
          : <Circle size={20} />}
      </button>

      <p>{todo.title}</p>

      <button type='button' onClick={handleDeleteTodo}>
        <Trash size={20} />
      </button>
    </li>
  );
}