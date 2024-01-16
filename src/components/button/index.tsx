import React from 'react'
import styles from './Button.module.scss'

class Button extends React.Component<{
  text: string, type?: 'submit' | 'reset' | 'button' | undefined
}> {
  static defaultProps = {
    type: 'button'
  }

  render() {
    return (
    <button type={ this.props.type } className={styles.button}>
        { this.props.text }
      </button>
    )
  }
}

export default Button