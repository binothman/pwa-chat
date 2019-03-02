import React from 'react'
import autosize from 'autosize';

const style = {
  minHeight:'20px',
  resize:'none',
  border: 0,
  outline: 'none',
  fontSize:'15px'
}
class Textarea extends React.Component{
  componentDidMount(){
     this.textarea.focus();
     autosize(this.textarea);
  }
  render(){
    return (
      <textarea
        style={style}
        ref={c=>this.textarea=c}
        placeholder="Type a message"
        rows={1}
        {...this.props}
      />
    )
  }
}


export default Textarea
