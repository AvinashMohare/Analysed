// import classes from "./Chats.module.scss";

// const Chats = () => {
//     return (
//         <div className={classes.rootChats}>
//             <div className={classes.header}>
//                 <div className={classes.userImage}>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
//                         alt="userName"
//                     />
//                 </div>

//                 <div className={classes.userName}>
//                     <p>Ronald</p>
//                 </div>
//             </div>
//             <div className={classes.m1}>
//                 <div className={classes.profilePic}>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
//                         alt="userName"
//                     />
//                 </div>
//                 <div className={classes.message}>
//                     <p>
//                         Hi, I'm experiencing some pain in my lower back. I was
//                         wondering if you could help me as a physiotherapist?
//                     </p>
//                 </div>
//             </div>

//             <div className={classes.m2}>
//                 <div className={classes.message}>
//                     <p>
//                         Can you please tell me more about the nature of your
//                         pain?
//                     </p>
//                 </div>
//             </div>

//             <div className={classes.m1}>
//                 <div className={classes.profilePic}>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
//                         alt="userName"
//                     />
//                 </div>
//                 <div className={classes.message}>
//                     <p>
//                         The pain started about a week ago after lifting a heavy
//                         object. It's a sharp, shooting pain in my lower back,
//                         and it gets worse when I bend or twist my body.
//                     </p>
//                 </div>
//             </div>

//             <div className={classes.m2}>
//                 <div className={classes.message}>
//                     <p>
//                         Hi, I'm experiencing some pain in my lower back. I was
//                         wondering if you could help me as a physiotherapist?
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Chats;

//

import React, { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

import "./components/Chats.scss";

function ChatComponent({ user, client }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    console.log("Physio Id is ", user.uid);
    console.log("Client Id is ", client.userID);

    useEffect(() => {
        console.log("Inside Chats");
        const conversationId = generateConversationId(user.uid, client.userID);
        const q = query(
            collection(db, "conversations", conversationId, "messages"),
            orderBy("timestamp")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedMessages = snapshot.docs.map((doc) => doc.data());
            setMessages(updatedMessages);
        });

        return () => {
            unsubscribe();
        };
    }, [user.uid, client.userID]);

    const generateConversationId = (userId1, userId2) => {
        return userId1 < userId2
            ? `${userId1}_${userId2}`
            : `${userId2}_${userId1}`;
    };

    const sendMessage = async () => {
        if (newMessage.trim() !== "") {
            const conversationId = generateConversationId(
                user.uid,
                client.userID
            );
            await addDoc(
                collection(db, "conversations", conversationId, "messages"),
                {
                    text: newMessage,
                    sender: user.uid,
                    timestamp: new Date(),
                }
            );
            setNewMessage("");
        }
    };

    return (
        <div>
            <h2>Chat with {client.userName}</h2>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${
                            message.sender === user.uid ? "sent" : "received"
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatComponent;
