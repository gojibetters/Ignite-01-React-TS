import { PaperPlaneTilt } from 'phosphor-react';
import { useState, useRef } from 'react';
import { Avatar } from './Avatar';
import styles from './Profile.module.css';

interface ProfileProps {
  handleProfileOpen: (state: boolean) => void
}

export function Profile({ handleProfileOpen }: ProfileProps) {

  const [avatar, setAvatar] = useState('https://github.com/gojibetters.png')

  const [input, setInput] = useState({
    type: 'file'
  })

  const ref = useRef()

  const [isInputOpen, setIsInputOpen] = useState(false)

  function handleEditAvatar() {
    setIsInputOpen(true)
  }

  const handleInput = (e: any) => {
    setAvatar(e.target.value)
  }

  const handleClickOutside = (e: any) => {
    if (!(e.target.firstChild.localName === 'div')) {
      handleProfileOpen(false)
    }
  }

  return (
    <div className={styles.container} onClick={handleClickOutside}>
      <header>
        <div className={styles.profile}>
          <Avatar src={avatar} onClick={handleEditAvatar} />

          {isInputOpen ? (
            <div className={styles.insertInput}>
              <input type='text' placeholder='Insira o URL da sua imagem' onChange={handleInput} />
              <button>
                <PaperPlaneTilt size={32} />
              </button>
            </div>
          ) : null}

          <strong>Rodolfo</strong>
          <span>Web Developer</span>
        </div>
      </header>
    </div>
  )

}