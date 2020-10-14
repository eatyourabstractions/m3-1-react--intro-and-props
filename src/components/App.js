import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  
  console.log(props.users)
  let participants = props.users.filter(p => p.username !== props.currentUser.username)
  return (
    <div className='wrapper'>
      <Header participants={participants}/>
      <ChatStream messages={props.conversation.messages}  currentUser={props.currentUser.username}/>
      <Footer />
    </div>
  );
};

export default App;
