import { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Message from "./components/Message";
import db from "./firebase";
import styled from "styled-components";

function App() {
  // useState
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");

  // Handler
  const MessageChange = (e) => {
    setValue(e.target.value);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    loadOnFireStore();
    scrollIntoView();
    setValue("");
  };

  // functions
  const loadOnFireStore = () => {
    db.collection("message").add({
      username: name,
      text: value,
      createdAt: Date.now(),
    });
  };
  const scrollIntoView = () => {
    BoxRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const getSnapShot = () => {
    db.collection("message")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((item) => {
          const { username } = item.data();
          const { text } = item.data();
          return { id: item.id, username, text };
        });
        setMessages(data);
      });
  };

  // useEffect
  useEffect(()=>{
    scrollIntoView();
  },[messages])

  useEffect(() => {
    setName(prompt("name"));
  }, []);

  useEffect(() => {
    getSnapShot();
  }, []);

  // useRef

  const BoxRef = useRef();

  return (
    <section>
      {name && <h2>welcom {name}</h2>}


      {/* message Box */}
      <form onSubmit={sendMessage}>
        <TextField
          id="standard-basic"
          onChange={MessageChange}
          value={value}
          label="Write your message"
          variant="standard"
        />
        <Button
          disabled={!value}
          variant="contained"
          color="primary"
          type="submit"
        >
          Send Message
        </Button>
      </form>
      
      <Box>
        {messages.map((item) => {
          return <Message key={item.id} name={name} {...item} />;
        })}
        <div ref={BoxRef} className="bottom"></div>
      </Box>

      {/* Messages them themsevles */}
    </section>
  );
}

const Box = styled.main`
  overflow-y: scroll;
  height: 70vh;
`;

export default App;
