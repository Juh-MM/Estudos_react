import style from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='31 de Março àS 08:13h' datetime="2025-03-31 08:13:00"></time>
                        </div>

                        <button title='Deletar comentário'>
                            <trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, parabens cara</p>
                </div>
                <footer>
                    <button>
                        <thumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}