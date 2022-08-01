import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import styles from './NewTaskForm.module.css';

interface NewTaskFormProps {
  onCreateTask: (title: string) => void;
}

export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [title, setTitle] = useState('');

  function handleChangeTitle(value: string) {
    setTitle(value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(title);
    setTitle('');
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTask}>
      <input 
        value={title}
        onChange={(e) => handleChangeTitle(e.target.value)}
        placeholder='Adicione uma nova tarefa'
        type="text"
      />

      <button type='submit'>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}