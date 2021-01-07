import React, { useState } from 'react'
import Player from '../components/player'
import { Link } from 'react-scroll'

import styles from './toggleable-film.module.scss'

export default function ToggleableFilm(props) {
  console.log(props.id, props.url)
  if (props.title === props.currentTrailer) {
    return (
      <Player
        url={props.url}
        title={props.title}
        description={props.description}
      />
    )
  }

  return (
    <Link
      activeClass="active"
      to={props.url}
      spy={true}
      smooth={true}
      duration={500}
    >
      <li className={styles.filmstrip}>
        <img
          src={props.image}
          alt={props.alt}
          className={styles.image}
          onClick={e => props.togglePlayer(e, props.title)}
        />

        <div className={styles.info}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
        </div>
      </li>
    </Link>
  )
}