import styles from './Sidebar.module.css'
import { PencilSimpleLine } from "phosphor-react";

export function Siderbar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1743021192936-56644cc30ac7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://images.unsplash.com/photo-1573496800808-56566a492b63?q=50&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
                <strong>Júlia Martins Monteiro</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={28} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}