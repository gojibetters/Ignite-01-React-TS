import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import '../../styles/global.css'
import styles from './Home.module.css'

import { Sidebar } from '../../components/Sidebar'
import { Profile } from '../../components/Profile'
import { useEffect, useState } from 'react'

import postsMock from '../../mock/posts.json'
import { Person } from '../../services/model/home'



function Home() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [formattedPosts, setFormattedPosts] = useState()

  function handleEditProfile() {
    setIsProfileOpen(true)
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar onClick={handleEditProfile} />
        <main>
          {postsMock.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={new Date(post.publishedAt)}
              />
            )
          })}
        </main>
      </div>

      {isProfileOpen ? (<Profile handleProfileOpen={setIsProfileOpen} />) : null}

    </div>
  )
}

export default Home
