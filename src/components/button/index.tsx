import React from 'react'
import styles from './Button.module.scss'

class Button extends React.Component<{ text: string }> {
  render() {
    return (
      <button className={styles.button}>
        { this.props.text }
      </button>
    )
  }
}

export default Button