import React from 'react';
import style from'./Messages.module.css';
import avatar from './../../avatar.jpg';
import Dialog from './Dialog/Dialog';


const Messages = (props) => {
    return(
         <div>
             <Dialog userName='Ronald' lastMessage='DURKA'/>
             <Dialog userName='Steve' lastMessage='Hi'/>
             <Dialog userName='Adolf' lastMessage='Zieg'/>
             <Dialog userName='Dave' lastMessage='Maybe some beer?'/>
         </div>   
    )
}

export default Messages;