"use client";
import Image from "next/image";
import DocumentCard from "@/components/DocumentCard"
import React, { useState } from "react";

interface Doc {
  title: string;
  content: string;
}

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [docs, setDocs] = useState<Doc[]>([]);

  const showModal = () => {
    setModalActive(true);
    setTitle("")
    setContent("")
  }

  const createDoc = () => {
    setModalActive(false);
    setDocs([...docs, {title, content}]);
  }

  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <Image src="/logo.svg" alt="Logo" height={48} width={48}></Image>
          <h2>Notiom</h2>
        </div>
        <button onClick={showModal}>Create</button>
      </div>
      <div className="hero">
        <h1>Create. Explore.</h1>
        <h2 style={{fontWeight: 500}}>The document editing software you've been waiting for</h2>
      </div>
      <div className="content">
        <button className="card add-doc" onClick={showModal}>
          <Image src="/add.svg" alt="Add document" height={120} width={120}></Image>
        </button>
        {docs.map((doc, i) => (
          <DocumentCard title={doc.title} content={doc.content} onClick={() => setDocs(docs.filter((_, j) => j !== i))} />
        ))}
      </div>
      <div className={modalActive ? "modal-container active" : "modal-container"}>
        <div className="modal">
          <h2>Create document</h2>
          <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} value={title}></input>
          <textarea placeholder="Content..." onChange={(e) => setContent(e.target.value)} value={content}></textarea>
          <button onClick={createDoc}>Create</button>
        </div>
      </div>
    </div>
  );
}