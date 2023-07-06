import React from 'react'
import styles from './Header.module.css';
import resumeSvg from '../../assets/resume.svg'
function Header() {
  
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}><span>Unlock</span> your professional potential</p>
            <p className={styles.heading}>with our cutting-edge <span>ResumeCraft</span></p>
        </div>
        <div className={styles.right}>
            <img src={resumeSvg}/>
        </div>
    </div>
  )
}

export default Header