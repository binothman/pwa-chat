import React from 'react'
import ChatLogs from 'components/templates/ChatLogs'
import MessageSender from 'components/molecules/MessageSender'
const Chat = () => (
  <div className="chat-container">
    <div className="chat-logs__container">
      <ChatLogs />
    </div>
    <div style={{height: '20%'}}>
      <MessageSender />
    </div>
  </div>
)

export default Chat
