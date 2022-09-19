import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wonders Literature Anthology Grade 3</h1>
      <p className={styles.title}>
        这本书
      </p>
      <div className="cover-playlist">
        <img className="cover" src="https://hlwsdtech.com/listening/img/LiteratureAnthology.db31aadz.jpg" />
      </div>
    </div>
  )
}

export default Header
