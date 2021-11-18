import { Button } from "@mui/material";
import { getAuth } from "@firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./chat.css";
import { useRef, useState } from "react";

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default function ChatRoom() {
  const auth = getAuth();
  const firestore = getFirestore();
  const dummy = useRef();
  const messagesCollection = collection(firestore, "messages");
  const q = query(messagesCollection, orderBy("createdAt"));

  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  console.log(messages);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesCollection, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit">🕊️</button>
      </form>
    </>
  );
}
