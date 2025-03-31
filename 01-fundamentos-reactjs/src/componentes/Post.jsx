import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1573496800808-56566a492b63?q=50&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <div className={styles.authorInfo}>
                        <strong>Jõao Italo Deodato</strong>
                        <span>UX design</span>
                    </div>
                </div>

                <time title='30 de Março á 09:24' datetime="2025-03-30 09:24:05">Publicado a 1 hora atrás</time>
            </header>

            <div className={styles.content}>
                <p>LOrem ipsum</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo adipisci necessitatibus eos illum animi ipsa corrupti magnam sed perferendis reiciendis dolorum delectus, nihil molestias molestiae deleniti quaerat harum suscipit recusandae.</p>
                <p>Acesse: <a href='https://github.com/Juh-MM'>meu github</a></p>
                <p>
                    <a hrf="">#dev</a>{' '}
                    <a hrf="">#fronend</a>{' '}
                    <a hrf="">#react</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                    <strong>Deixe seu feddback</strong>

                    <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
            </div>

        </article>
    );
}
