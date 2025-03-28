import { Header } from './componentes/Header';
import { Post } from './Post';

import './global.css'
import styles from './App.module.css'
import { Siderbar } from './componentes/Sidebar';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <Siderbar />

        <main>
          <Post 
          author="julia martins"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos earum laborum blanditiis"
          />
          <Post
          author="gabriel carvalho"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis libero laudantium sequi in adipisci nisi numquam iste. Corporis debitis nobis culpa est harum, facilis ipsa fugiat unde iure tempora!"
          ></Post>
        </main>
        
      </div>
    </div>
  );
}
