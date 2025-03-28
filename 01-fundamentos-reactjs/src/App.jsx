import { Header } from './componentes/Header';
import { Siderbar } from './componentes/Sidebar';
import { Post } from './componentes/Post';

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <Siderbar />

        <main>
          <Post />
          <Post />
        </main>
        
      </div>
    </div>
  );
}
