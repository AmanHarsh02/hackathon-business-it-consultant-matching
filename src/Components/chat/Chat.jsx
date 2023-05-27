import "./chat.css";

import { useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";

export const Chat=()=>
{
    const {state,dispatch}=useContext(ChatContext);
    const {allMessages,newMessage}=state;

    return (<>
        <h1>This is Nav</h1>
        <div className="chat-component">
            <div className="chat-container">
                <div className="head-container"><h2 style={{textAlign:"left"}}>{allMessages[2].name} <span className="active"> . </span></h2>
                <hr style={{marginTop:"0.5rem"}} /></div>
                <div className="text-container">
                {[...allMessages[2].messages]?.map((text,index)=>{
                    return (
                        <li key={index} className="chat-list-item">
                           
                            <p className="chat-message">{text}</p>
                        </li>
                    )
                })}
                </div>
                <div className="send-text-container">
                <input className="chat-input" placeholder="Enter new Chat" value={newMessage} onChange={(e)=>dispatch({type:"CHANGE_TEXT",payload:e.target.value})}></input>
                <button onClick={()=>dispatch({type:"ADD_MESSAGE",payload:newMessage})}><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75 38.3334V26.8334L21.0833 23.0001L5.75 19.1667V7.66675L42.1667 23.0001L5.75 38.3334Z" fill="black"/>
</svg></button>
                
                </div>
            </div>
            <ul className="list-container">
                {allMessages.map((item,index)=>{
                    const {name,messages}=item;
                    return (
                        <li key={index} className="list-item">
                            <h3 style={{fontSize:"1.4rem",marginBottom:"0.5rem"}}>{name}</h3>
                            
                            <p style={{marginBottom:"0.5rem"}}>{messages[1]?.message}</p>
                            <hr/>
                        </li>
                    )
                })}
            </ul>
            
        </div>
        </>
    )
}