import React from 'react'

class Button extends React.Component {
  render() {
    const backgroundColor = 'red'

    return (
      <button style={{ backgroundColor, borderRadius: '5px' }}>
        Button
      </button>
    )
  }
}

export default Button