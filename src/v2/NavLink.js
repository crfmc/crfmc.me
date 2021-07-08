import React from 'react';
import * as styles from './styles_v2/navlink.module.css'

export default function NavLink(props)
{
  return (
    <div className={styles.navlink_container}>
      <h2 className={styles.title}>{props.title}</h2>
      <h4 className={styles.subtext}>{props.subtext}</h4>
      <a
        href={props.href}
        className={styles.call_button}
        target={props.target}
        rel={props.rel}
      >
        {props.call}
      </a>
    </div>
  );
}