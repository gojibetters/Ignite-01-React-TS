import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleNewLike() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/gojibetters.png' alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Patez</strong>
              <time
                title='25 de janeiro às 16h'
                dateTime='2023-02-25 16:00:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp />
            Likes <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}