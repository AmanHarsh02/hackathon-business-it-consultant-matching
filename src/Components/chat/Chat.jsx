import "./chat.css";

import { useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";

export const Chat=()=>
{
    const {state,dispatch}=useContext(ChatContext);
    const {allMessages,newMessage}=state;

    return (
        <div>This is Chat
            <ul>
                {allMessages.map((item,index)=>{
                    const {name,messages}=item;
                    return (
                        <li key={index}>
                            <h3>{name}</h3>
                            <p>{messages[1]?.message}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="chat-container">
                <h2>{allMessages[2].name}</h2>
                <div className="text-container">
                {[...allMessages[2].messages]?.map((text,index)=>{
                    return (
                        <li key={index}>
                            <strong>You</strong>
                            <p>{text}</p>
                        </li>
                    )
                })}
                </div>
                <div>
                <input placeholder="Enter new Chat" value={newMessage} onChange={(e)=>dispatch({type:"CHANGE_TEXT",payload:e.target.value})}></input>
                <button onClick={()=>dispatch({type:"ADD_MESSAGE",payload:newMessage})}>Send</button>
                </div>
            </div>
        </div>
    )
}