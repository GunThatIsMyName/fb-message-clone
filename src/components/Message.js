import React from "react";
import styled from "styled-components";

const Message = ({ text, username, name }) => {
  const isMine = name === username;
  return (
    <Card  className={isMine && "isMine"} >
      <h2>
        {username} : {text}
      </h2>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin: 1rem;
  width: fit-content;
  border-radius: 5px;
  &.isMine {
    margin-left: auto;
    background: #0b81ff;
    color: #fff;
  }
`;

export default Message;
