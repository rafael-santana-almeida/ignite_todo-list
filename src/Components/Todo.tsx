import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from './Todo.module.css'

export function Todo() {
  return (
    <li className={`${styles.todo}`}>
      <button type='button'>
        {/* <CheckCircle size={20} weight='fill' /> */}
        <Circle size={20} />
      </button>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

      <button type='button'>
        <Trash size={20}/>
      </button>
    </li>
  );
}