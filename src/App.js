
import { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from "./firebase"
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import ChatIcon from '@material-ui/icons/Chat';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState("");

  useEffect(()=>{
    setUsername(prompt("please enter your name : "));
  },[])
  
  useEffect(()=>{
    //all documents are inside snapshot
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  },[])

  const sendMessage=(event)=>{
      //all the logic to send messages
      event.preventDefault();
      db.collection('messages').add({
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      
      setInput("");
  }
  //console.log(messages)

  return (
    <div className="App">
    
    <h1> Messenger : <ChatIcon/></h1>
     <h2>📝</h2>
    <h2>welcome  {username}</h2>
    <form className="app__form">
    <FormControl className="app__formControl">
      
      <Input value={input} className="app__input" placeholder="enter the message..." onChange={event => setInput(event.target.value)}/>
      <Button className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon/></Button>
    </FormControl>
    
   </form>
   <FlipMove>
    {
      messages.map(({id,message})=>(
        <Message key={id} username={username} message={message}/>
        ))
    }
    </FlipMove>
    </div>
  );
}

export default App;
