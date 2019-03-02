import React from 'react'
import Conversation from 'components/templates/Conversation'

const Conversations = () => (
  <div>
    <Conversation
      avatar="https://www.streamlinedetailing.net/wp-content/uploads/2014/03/08_team.png"
      title="Mohamed Binothman"
      time="11:10 PM"
      unread="2"
    />
    <Conversation
      title="Ahmed"
      last_message="Hello, Where are you!"
    />
    <Conversation />
    <Conversation />
    <Conversation />
  </div>
)

export default Conversations
