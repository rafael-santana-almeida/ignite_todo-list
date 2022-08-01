import { ClipboardText } from 'phosphor-react';

import styles from './NoContent.module.css';

export function NoContent() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56}/>
      <p><span>Você ainda não tem tarefas cadastradas</span></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}