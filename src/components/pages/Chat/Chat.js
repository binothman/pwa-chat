import React from 'react'
import ChatLogs from 'components/templates/ChatLogs'
import MessageSender from 'components/molecules/MessageSender'
const Chat = () => (
  <div className="chat-container">
    <div id="chat-header" style={{height: '50px', background: '#075e55'}}>

    </div>
    <div className="chat-logs__container">
      <ChatLogs />
    </div>
    <div>
      <MessageSender />
    </div>
  </div>
)

export default Chat
