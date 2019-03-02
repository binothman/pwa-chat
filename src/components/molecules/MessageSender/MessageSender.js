import React from 'react'
import EmojiPicker from 'emoji-picker-react';
import { Icon } from 'semantic-ui-react'
import JSEMOJI from 'emoji-js';
import Textarea from './Textarea'


//emoji set up
let jsemoji = new JSEMOJI();
// set the style to emojione (default - apple)
jsemoji.img_set = 'emojione';
// set the storage location for all emojis
jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';

class MessageSender extends React.Component{
  state = {
    inputText: '',
    active_emoji: false
  }
  handleOnEmojiClick = (c, e) => {
    let emoji = jsemoji.replace_colons(`:${e.name}:`);
    this.setState({
      inputText: this.state.inputText + emoji
    })
  }

  hanldeOnChange = e => {
    const value = e.target.value
    this.setState({
      inputText: value
    })
  }
  render(){
    const { active_emoji, inputText } = this.state
    return (
      <div className="message-sender">
        {active_emoji &&
          <div className="emoji-container">
            <EmojiPicker onEmojiClick={this.handleOnEmojiClick}/>
          </div>
        }
        <div className="input-container">
          {active_emoji &&
            <Icon
              name="cancel"
              size="large"
              color="grey"
              style={{marginTop: '-5px'}}
              onClick={() => this.setState({ active_emoji: false })}
            />
          }
          <Icon
            name="smile outline"
            size="large"
            color="grey"
            style={{marginTop: '-5px'}}
            onClick={() => this.setState({ active_emoji: true })}
          />
          <Textarea
            value={this.state.inputText}
            onChange={this.hanldeOnChange}
          />
        </div>
      </div>
    )
  }
}


export default MessageSender
