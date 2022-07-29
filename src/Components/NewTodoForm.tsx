import { PlusCircle } from 'phosphor-react';

import styles from './NewTodoForm.module.css';

export function NewTodoForm() {
  return (
    <form className={styles.form}>
      <input placeholder='Adicione uma nova tarefa' type="text" />
      <button type='submit'>
        Criar
        <PlusCircle size={16} /></button>
    </form>
  );
}