"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import { useState, useEffect, useRef } from "react";
import { Send, Trash } from "lucide-react";
import Image from "next/image";
import bot from '../../public/images/bot.png'
import user from '../../public/images/people.png'
interface Message {
  role: string;
  parts: string;
}

const ChatArea = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [input, setinput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<Message[]>([
    {
      role: "model",
      parts: "Great to meet you. Im Gemini, your chatbot.",
    },
  ]);
  const genAI = new GoogleGenerativeAI('AIzaSyAjBrSY4HpWS3bBEtBQXWARWB2uAJlr8ks');
  const [chat, setchat] = useState<any>(null);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

    }
  }, [history]);
  useEffect(() => {
    // the moment I felt , Im the GOD !
    if (!chat) {
      setchat(
        model.startChat({
          generationConfig: {
            maxOutputTokens: 400,
          },
        })
      )
    }
  }, [chat, model]);

  async function chatting() {
    setLoading(true);
    setHistory((oldHistory) => [
      ...oldHistory,
      {
        role: "user",
        parts: input,
      },
      {
        role: "model",
        parts: "Thinking...",
      },
    ]);
    setinput("");
    try {
      const result = await chat?.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      setLoading(false);
      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({
          role: "model",
          parts: text,
        });
        return newHistory;
      });
    } catch (error) {
      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({
          role: "model",
          parts: "Oops! Something went wrong.",
        });
        return newHistory;
      });
      setLoading(false);
      console.log(error);
      alert("Oops! Something went wrong.");
      window.location.reload();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      chatting();
    }
  }

  function reset() {
    setHistory([
      {
        role: "model",
        parts: "Great to meet you. Im Gemini, your chatbot.",
      },
    ]);
    setinput("");
    setchat(null);
  }

  return (
    <div
    style={{
        // maxWidth: '90%',
margin: '0 auto',
padding: '20px',
// backgroundColor: '#ead9f4',
borderRadius: '8px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
minHeight:"90vh",
marginTop:"60px"
      }}
    className="relative flex px-2 justify-center max-w-3xl w-full pt-6 bg-gray-100 rounded-t-3xl max-h-screen shadow shadow-slate-900">
      <div className="flex px-3 text-sm md:text-base flex-col pt-10 pb-16 w-full flex-grow flex-1 rounded-3xl shadow-md overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className={`chat ${
              item.role === "model" ? "chat-start" : "chat-end"
            } flex gap-3 items-center`}
          >
            <div className="chat-image avatar">
              <div className="w-6 md:w-10 rounded-full">
                <Image
                  alt={item.role==="model"?"bot":'user'}
                  src={item.role === "model" ? "/images/bot.png":"/images/people.png"}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            {/* <div className="chat-header mx-2 font-semibold opacity-80">
              {item.role === "model" ? "Gemini" : "You"}
            </div> */}
            <div
              className={`chat-bubble font-medium ${
                item.role === "model" ? "chat-bubble-primary" : ""
              }`}
            >
              <Markdown>{item.parts}</Markdown>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="absolute px-2 bottom-2 w-full flex gap-1">
        <button
          className="btn btn-outline btn-error rounded-3xl backdrop-blur"
          title="send"
          onClick={reset}
        >
          <Trash />
        </button>
        <textarea
          // type="text"
          value={input}
          required
          rows={1}
          onKeyDown={handleKeyDown}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Start Chatting..."
        //   className="textarea backdrop-blur textarea-primary w-full mx-auto bg-opacity-60 font-medium shadow rounded-3xl"
          className="block mx-auto w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-purple-500 focus:border-purple-500"
        />
        <button
          className={`btn rounded-3xl ${
            loading
              ? "btn-accent cursor-wait pointer-events-none"
              : "btn-primary"
          }`}
          title="send"
          onClick={chatting}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <Send />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatArea;