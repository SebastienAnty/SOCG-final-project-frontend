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

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid, photoURL } = props.message;

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
