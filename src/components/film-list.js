import React from 'react'
import FilmListItem from './film-list-item'
import film1 from '../images/film1.jpg'
import film2 from '../images/film2.jpg'
import film3 from '../images/film3.jpg'

import styles from './film-list.module.scss'

export default function FilmList(props) {
  return (
    <ul>
      <FilmListItem image={film1} text="Distressed" alt="Description of film" />
      <FilmListItem image={film2} text="Dimmiga Dar" alt="Description of film" />
      <FilmListItem image={film3} text="Mad Dog - 2016" alt="Description of film" />
    </ul>
  )
}
