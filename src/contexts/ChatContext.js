import { createContext, useReducer } from "react";

export const ChatContext=createContext();

export const ChatProvider=({children})=>
{
    const chatReducer=(chat,{type,payload})=>
    {
        const {allMessages}=chat;
        switch(type)
        {
            case "CHANGE_TEXT":
                return {...chat,newMessage:payload};

            case "ADD_MESSAGE":
                const updatedAllMessages = allMessages.map(item => {
                    if (item.name === "Abhishek") {
                      return { ...item, messages: [...item.messages,payload] };
                    }
                    return item;
                  });
                return {...chat,allMessages:updatedAllMessages};
                    
            
            default:
                return {...chat};    
        }
    }
    const initialState={
        allMessages:[{
            name: 'Alia',
            messages: [
              {
                consultant: 'Alia',
                message: 'Good Morning',
              },
              {
                sender: 'Ranvir',
                message: 'Good Morning, How are you?',
              },
            ],
          },
          {
            name: 'Jeena',
            messages: [
              {
                consultant: 'Jeena',
                message: 'When is the meeting scheduled?',
              },
              {
                sender: 'Seema',
                message: 'It is at 10AM tomorrow.',
              },
            ],
          },
          {
            name:"Abhishek",
            messages:[],
          }
        ],
        newMessage:"",
    }
    const [state,dispatch]=useReducer(chatReducer,initialState);
    return (
        <ChatContext.Provider value={{state,dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}