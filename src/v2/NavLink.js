import React from 'react';
import * as styles from './styles_v2/navlink.module.css'

export default function NavLink(props)
{
  return (
    <a
      className={styles.container_anchor}
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <div
        className={styles.navlink_container}
        style={{
          animationDelay: props.animation_delay
        }}
      >
      <div className={styles.navlink_header}>
        <img src={props.icon} alt={props.icon_alt} />
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <p className={styles.subtext}>{props.subtext}</p>
      </div>
    </a>
  );
}