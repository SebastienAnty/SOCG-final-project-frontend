// import React from "react";
// import "./App.css";

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// firebase.initializeApp({
//   apiKey: "AIzaSyBdrCw8ywZVNe2OrCWgZaE1DWCSuHTluG0",
//   authDomain: "socg-sma.firebaseapp.com",
//   databaseURL: "https://socg-sma.web.app",
//   projectId: "socg-sma",
//   storageBucket: "socg-sma.appspot.com",
//   messagingSenderId: "3962080397",
//   appId: "1:3962080397:web:a257c1055361f7b04626c4",
// });

// const auth = firebase.auth();

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

//   return (
//     <>
//       <div className={`message ${messageClass}`}>
//         <img
//           src={
//             photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
//           }
//         />
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });

//     setFormValue("");
//     dummy.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <main>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

//         <span ref={dummy}></span>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//           placeholder="say something nice"
//         />

//         <button type="submit" disabled={!formValue}>
//           🕊️
//         </button>
//       </form>
//     </>
//   );
// }
