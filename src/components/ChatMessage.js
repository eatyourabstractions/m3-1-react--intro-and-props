import React from 'react';
import './ChatMessage.css';




const ChatMessage = (props) => {
    if (props.messageType === 'sent') {
      return <SentMessage message={props.message} />;
    } else {
      return <ReceivedMessage message={props.message} />;
    }
  };



  const SentMessage = ({message}) =>{
    let {body} = message;
  
    return <div className="chat-message">
        <span className='sent'>{body}</span>
    </div>
};


const ReceivedMessage = ({message}) =>{
    let { body, user} = message;
    let {username, avatar} = user;
    return <div className="chat-message">
        <div className='msg'>
        <div className='username'>{username}</div>
       <img src={`${avatar}`}  className="avatar" alt=""/>
       
        <span className='body'>{body}</span>
        
        </div>
    </div>
};

export default ChatMessage;


// <span className='body'>{body}</span>