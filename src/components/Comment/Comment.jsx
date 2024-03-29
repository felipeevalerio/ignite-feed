import styles from './Comment.module.scss';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/felipeevalerio.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Valério</strong>
                            <time 
                                title="11 de maio às 08:00h"
                                dateTime="2022-05-11 08:00:10"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};