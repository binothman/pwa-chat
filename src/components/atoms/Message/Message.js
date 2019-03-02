import React from 'react'

const Message = ({ sender, text }) => (
  <div className={`${sender && 'sender-container'}`}>
    <div className={`message ${sender && 'message--sender'}`}>
      {text}
    </div>
  </div>
)

export default Message
