import React from 'react'
import styles from './Inputctrl.module.css'

const Inputctrl = ({label, ...props }) => {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type="text" {...props} />
    </div>
  )
}

export default Inputctrl;