// import React, { useState, useEffect } from "react";
// import {
//     collection,
//     addDoc,
//     query,
//     orderBy,
//     onSnapshot,
// } from "firebase/firestore";
// import { db } from "../../firebase";
// import classes from "./Chats.module.scss";

// const Chats = ({ user, client }) => {
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState("");

//     console.log("Physio Id is ", user.uid);
//     console.log("Client Id is ", client.userID);

//     useEffect(() => {
//         console.log("Inside Chats");
//         const conversationId = generateConversationId(user.uid, client.userID);
//         const q = query(
//             collection(db, "conversations", conversationId, "messages"),
//             orderBy("timestamp")
//         );

//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             const updatedMessages = snapshot.docs.map((doc) => doc.data());
//             setMessages(updatedMessages);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, [user.uid, client.userID]);

//     const generateConversationId = (userId1, userId2) => {
//         return userId1 < userId2
//             ? `${userId1}_${userId2}`
//             : `${userId2}_${userId1}`;
//     };

//     const sendMessage = async () => {
//         if (newMessage.trim() !== "") {
//             const conversationId = generateConversationId(
//                 user.uid,
//                 client.userID
//             );
//             await addDoc(
//                 collection(db, "conversations", conversationId, "messages"),
//                 {
//                     text: newMessage,
//                     sender: user.uid,
//                     timestamp: new Date(),
//                 }
//             );
//             setNewMessage("");
//         }
//     };

//     console.log(user.bio);

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
//                     <p>{client.userName}</p>
//                 </div>
//             </div>
//             <div className={classes.chatMessages}>
//                 {messages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`${classes.message} ${
//                             message.sender === user.uid
//                                 ? classes.sent
//                                 : classes.received
//                         }`}
//                     >
//                         <div className={classes.msg}>
//                             <p>{message.text}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className={classes.chatInput}>
//                 <div className={classes.inputContainer}>
//                     <input
//                         type="text"
//                         value={newMessage}
//                         onChange={(e) => setNewMessage(e.target.value)}
//                         placeholder="Type your message here.."
//                     />
//                     <button
//                         onClick={sendMessage}
//                         className={classes.sendButton}
//                     >
//                         <p>Send message</p>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Chats;

//Scrolls into view what we need -------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect, useRef } from "react";
// import {
//     collection,
//     addDoc,
//     query,
//     orderBy,
//     onSnapshot,
// } from "firebase/firestore";
// import { db } from "../../firebase";
// import classes from "./Chats.module.scss";

// const Chats = ({ user, client }) => {
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState("");
//     const messagesEndRef = useRef(null);

//     console.log("Physio Id is ", user.uid);
//     console.log("Client Id is ", client.userID);

//     useEffect(() => {
//         console.log("Inside Chats");
//         const conversationId = generateConversationId(user.uid, client.userID);
//         const q = query(
//             collection(db, "conversations", conversationId, "messages"),
//             orderBy("timestamp", "asc") // Order messages by ascending timestamp
//         );

//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             const updatedMessages = snapshot.docs.map((doc) => doc.data());
//             setMessages(updatedMessages);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, [user.uid, client.userID]);

//     useEffect(() => {
//         scrollToBottom(); // Scroll to the latest message on initial render
//     }, [messages]);

//     const generateConversationId = (userId1, userId2) => {
//         return userId1 < userId2
//             ? `${userId1}_${userId2}`
//             : `${userId2}_${userId1}`;
//     };

//     const sendMessage = async () => {
//         if (newMessage.trim() !== "") {
//             const conversationId = generateConversationId(
//                 user.uid,
//                 client.userID
//             );
//             await addDoc(
//                 collection(db, "conversations", conversationId, "messages"),
//                 {
//                     text: newMessage,
//                     sender: user.uid,
//                     timestamp: new Date(),
//                 }
//             );
//             setNewMessage("");
//         }
//     };

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     console.log(user.bio);

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
//                     <p>{client.userName}</p>
//                 </div>
//             </div>
//             <div className={classes.chatMessages}>
//                 {messages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`${classes.message} ${
//                             message.sender === user.uid
//                                 ? classes.sent
//                                 : classes.received
//                         }`}
//                     >
//                         <div className={classes.msg}>
//                             <p>{message.text}</p>
//                         </div>
//                     </div>
//                 ))}
//                 <div ref={messagesEndRef} />{" "}
//                 {/* Empty div for scrolling to bottom */}
//             </div>
//             <div className={classes.chatInput}>
//                 <div className={classes.inputContainer}>
//                     <input
//                         type="text"
//                         value={newMessage}
//                         onChange={(e) => setNewMessage(e.target.value)}
//                         placeholder="Type your message here.."
//                     />
//                     <button
//                         onClick={sendMessage}
//                         className={classes.sendButton}
//                     >
//                         <p>Send message</p>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Chats;

//Different method --------------------------------------------------------------------------------
import React, { useState, useEffect, useRef } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import classes from "./Chats.module.scss";

const Chats = ({ user, client }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);

    // console.log("Physio Id is ", user.uid);
    // console.log("Client Id is ", client.userID);

    useEffect(() => {
        console.log("Inside Chatssss");
        const q = query(
            collection(db, "messages", user.uid, client.userID),
            orderBy("timestamp", "asc") // Order messages by ascending timestamp
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedMessages = snapshot.docs.map((doc) => doc.data());
            setMessages(updatedMessages);
        });

        return () => {
            unsubscribe();
        };
    }, [user.uid, client.userID]);

    useEffect(() => {
        scrollToBottom(); // Scroll to the latest message on initial render
    }, [messages]);

    const sendMessage = async () => {
        if (newMessage.trim() !== "") {
            const messageData = {
                fromId: user.uid,
                toId: client.userID,
                text: newMessage,
                timestamp: serverTimestamp(),
            };

            await addDoc(
                collection(db, "messages", user.uid, client.userID),
                messageData
            );
            setNewMessage("");
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    

    return (
        <div className={classes.rootChats}>
            <div className={classes.header}>
                <div className={classes.userImage}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
                        alt="userName"
                    />
                </div>

                <div className={classes.userName}>
                    <p>{client.userName}</p>
                </div>
            </div>
            <div className={classes.chatMessages}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${classes.message} ${
                            message.fromId === user.uid
                                ? classes.sent
                                : classes.received
                        }`}
                    >
                        <div className={classes.msg}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />{" "}
                {/* Empty div for scrolling to bottom */}
            </div>
            <div className={classes.chatInput}>
                <div className={classes.inputContainer}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here.."
                    />
                    <button
                        onClick={sendMessage}
                        className={classes.sendButton}
                    >
                        <p>Send message</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chats;
