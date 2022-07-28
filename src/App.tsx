import { Form } from './Components/Form';
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Form />
      </div>
    </>
  )
}
