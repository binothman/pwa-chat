import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

const Conversation = ({ avatar, title, last_message, time, unread }) => (
  <div className="conversation">
    <Image
      src={avatar}
      className="conversation__avatar"
      verticalAlign="top"
      avatar
    />
    <div className="conversation__wrapper">
      <div className="conversation__container">
        <div>
          <div className="conversation__title">{title}</div>
          {last_message &&
            <div className="conversation__last_message">
              {last_message}
            </div>
          }
        </div>
        <div className="conversation__time">
          <div>{time}</div>
          {unread && <div className="conversation__unread">{unread}</div>}
        </div>
      </div>
    </div>

  </div>
)

Conversation.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  last_message: PropTypes.string,
  time: PropTypes.string,
}

Conversation.defaultProps = {
  avatar: 'https://www.sgbt.lu/uploads/tx_bisgbio/default-profile_01.png',
  title: '....',
  time: '00:00 AM'
}
export default Conversation
