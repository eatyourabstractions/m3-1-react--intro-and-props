import React from 'react';

import './Header.css';

const Header = (props) => {
  console.log(props)
  return <header>{
    
    props.participants.map((ms, index) => {
      
      return( 
          
            <li key={ms.username} className="plain">
               <img src={`${ms.avatar}`}  className="avatar"  alt=""/>
               <span>{ms.username}</span>
             </li>
             
      )
        }) 
      
      }
    </header>
};

export default Header;
