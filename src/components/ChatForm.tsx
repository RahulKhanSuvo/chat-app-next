"use client";
import React, { useState } from "react";

function ChatForm() {
  const [message, setMessage] = useState("");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessage("");
    }
  };
  return (
    <form onSubmit={handelSubmit} className="flex gap-2 mt-4 ">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 border-2 py-2 rounded-lg focus:outline-0"
        placeholder="type your message here..."
        name=""
        id=""
      />
      <button type="submit" className="px-4 py-3 rounded-2xl bg-orange-400">
        Send
      </button>
    </form>
  );
}

export default ChatForm;
