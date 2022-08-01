import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import styles from './NewTodoForm.module.css';

interface NewTodoFormProps {
  onCreateTodo: (title: string) => void;
}

export function NewTodoForm({ onCreateTodo }: NewTodoFormProps) {
  const [title, setTitle] = useState('');

  function handleChangeTitle(value: string) {
    setTitle(value);
  }

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    onCreateTodo(title);
    setTitle('');
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTodo}>
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