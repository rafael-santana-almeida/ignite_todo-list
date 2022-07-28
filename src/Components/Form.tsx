import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

export function Form() {
  return (
    <form className={styles.form}>
      <input placeholder='Adicione uma nova tarefa' type="text" />
      <button type='submit'>
        Criar
        <PlusCircle size={16} /></button>
    </form>
  )
}