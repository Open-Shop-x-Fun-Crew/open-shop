import React, { useState } from 'react'
import FilmList from './film-list'

import styles from './site.module.css'

export default function Site() {
  return (
    <div>
      <main>
        <div>
          <p>Open Shop is film-making duo</p>
        </div>
        <FilmList />
      </main>
      <footer>
        <p>footer text</p>
      </footer>
    </div>
  )
}