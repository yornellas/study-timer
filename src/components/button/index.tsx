import React from 'react'
import styles from './Button.module.scss'

class Button extends React.Component<{
  text: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
}> {
  static defaultProps = {
    type: 'button',
  }

  render() {
    return (
      <button
        type={this.props.type}
        className={styles.button}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
