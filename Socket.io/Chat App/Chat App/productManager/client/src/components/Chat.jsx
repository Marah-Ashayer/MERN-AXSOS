import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [txt,setTxt]=useState("");
    const[messages,setMessages]=useState([]);
    useEffect(() => {
        socket.on('Welcome', data => console.log(data));
        socket.on("chat",data=> setMessages([data,...messages]));
    });
    const handleSubmit= e => {
        e.preventDefault();
        socket.emit("chat", txt)
    }
    const stylee ={
        textAligncenter :'center',
        marginLeft:'25%',
        marginTop : '5%',
        fontFamily:'cursive',
        overFlow: 'scroll',
    }    
    return (
    <div style={stylee}>
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e=>setTxt(e.target.value)}/>
            <input type="submit" value="send"/>
        </form>
        {messages.map((msg,i)=><p key={i}>{msg}</p>)}
    </div>
    )
}

export default Chat;
