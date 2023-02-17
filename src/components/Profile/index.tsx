import { PaperPlaneTilt } from 'phosphor-react';
import { useState, useRef, useEffect } from 'react';
import { Avatar } from '../Avatar';
import styles from './Profile.module.css';

import { Person } from '../../services/model/home';

interface ProfileProps {
  handleProfileOpen: (state: boolean) => void
}

export function Profile({  handleProfileOpen }: ProfileProps) {

  const [isInputOpen, setIsInputOpen] = useState(false)
  const [avatar, setAvatar] = useState('')

  const [user, setUser] = useState<Person>({
    id: 0,
    avatarUrl: '',
    name: '',
    role: '' 
  })

  useEffect(()=> {
    setUser({
      id:1,
      avatarUrl: "https://github.com/gojibetters.png",
      name: "Bruno Amaral Patez",
      role: "Developer"
    })
  }, [])

  function handleEditAvatar() {
    setIsInputOpen(true)
  }

  const handleInput = (e: any) => {
    const value = e.target.value
    setUser({
      ...user,
      avatarUrl: value
    })

  }

  const handleClickOutside = (e: any) => {
    if ((e.target.id === 'container')) {
      handleProfileOpen(false)
    }
  }

  return (
    <div id='container' className={styles.container} onClick={handleClickOutside}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder={false} src={user.avatarUrl} onClick={handleEditAvatar}/>

          {isInputOpen ? (
            <div className={styles.insertInput}>
              <input type='text' placeholder='Insira o URL da sua imagem' onChange={handleInput} />
              <button>
                <PaperPlaneTilt size={32} />
              </button>
            </div>
          ) : null}

          <strong>{user.name}</strong>
          <span>{user.role}</span>
        </div>
      </header>
    </div>
  )

}