import { Button } from "@mui/material";
import { getAuth } from "@firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "./chat.css";
import { useRef, useState } from "react";

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}

export default function ChatRoom({ gameId }) {
  const auth = getAuth();
  const firestore = getFirestore();
  const dummy = useRef();
  const messagesCollection = collection(firestore, "messages");
  const q = query(
    messagesCollection,
    where("gameId", "==", gameId || "soclgaming"),
    orderBy("createdAt")
  );

  const [messages] = useCollectionData(q, { idField: "id" });
  console.log(messages);
  const [formValue, setFormValue] = useState("");

  console.log(messages);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await addDoc(messagesCollection, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      gameId: gameId || "soclgaming",
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
          placeholder="Say Something Nice"
        />

        <button type="submit">Send</button>
      </form>
    </>
  );
}
