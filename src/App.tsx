import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Profile } from './components/Profile'
import { useState } from 'react'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gojibetters.png',
      name: 'Bruno Amaral Patez',
      role: 'Developer'
    },
    content: [
      { typeTag: 'paragraph', content: 'Fala galeraa 👋' },
      { typeTag: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { typeTag: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-02-02 17:26:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { typeTag: 'paragraph', content: 'Fala galeraa 👋' },
      { typeTag: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { typeTag: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-02-03 19:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { typeTag: 'paragraph', content: 'Fala galeraa 👋' },
      { typeTag: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { typeTag: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-02-03 21:00:00'),
  }
]

function App() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)

  function handleEditProfile() {
    setIsProfileOpen(true)
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar onClick={handleEditProfile} />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

      {isProfileOpen ? (<Profile handleProfileOpen={setIsProfileOpen} />) : null}

    </div>
  )
}

export default App
