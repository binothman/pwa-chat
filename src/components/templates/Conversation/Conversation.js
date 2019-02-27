import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const Conversation = () => (
  <div className="conversation">
    <Image
      src='https://www.streamlinedetailing.net/wp-content/uploads/2014/03/08_team.png'
      className="conversation-avatar"
      verticalAlign="top"
      avatar
    />
    <div className="conversation-description">
      <div>
        <div className="conversation-title">Semba Ahmed</div>
        <div className="conversation-last_message">
          There should be an sample
        </div>
      </div>
      <div className="conversation-time">
        <div>6:43 PM</div>
        <div className="conversation--unread">353</div>
      </div>

    </div>

  </div>
)

export default Conversation
