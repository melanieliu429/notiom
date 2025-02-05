"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import DocumentCard from "@/components/DocumentCard";
import Modal from "@/components/Modal";
import React, { useState } from "react";

interface Doc {
  title: string;
  content: string;
}

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [activeDocIndex, setActiveDocIndex] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [docs, setDocs] = useState<Doc[]>([]);

  const showModal = (index: number | null = null) => {
    setModalActive(true);
    if (index !== null) {
      setTitle(docs[index].title);
      setContent(docs[index].content);
      setActiveDocIndex(index);
    } else {
      setTitle("");
      setContent("");
      setActiveDocIndex(null);
    }
  };

  const hideModal = () => {
    setModalActive(false);
    setTitle("");
    setContent("");
    setActiveDocIndex(null);
  };

  const createOrUpdateDoc = () => {
    if (activeDocIndex !== null) {
      const updatedDocs = docs.map((doc, index) =>
        index === activeDocIndex ? { title, content } : doc
      );
      setDocs(updatedDocs);
    } else {
      setDocs([...docs, { title, content }]);
    }
    hideModal();
  };

  const deleteDoc = () => {
    if (activeDocIndex !== null) {
      const filteredDocs = docs.filter((_, index) => index !== activeDocIndex);
      setDocs(filteredDocs);
      hideModal(); 
    }
  };

  return (
    <div className="main">
      <Nav onCreate={() => showModal()} />
      <div className="hero">
        <h1>Create. Explore.</h1>
        <h2 style={{ fontWeight: 500 }}>
          The document editing software you've been waiting for
        </h2>
      </div>
      <div className="content">
        <button className="card add-doc" onClick={() => showModal()}>
          <Image src="/add.svg" alt="Add document" height={120} width={120} />
        </button>
        {docs.map((doc, i) => (
          <DocumentCard
            key={i}
            title={doc.title}
            content={doc.content}
            onClick={() => showModal(i)}
          />
        ))}
      </div>
      <Modal
        isActive={modalActive}
        title={title}
        content={content}
        onClose={hideModal}
        onSave={createOrUpdateDoc}
        onDelete={deleteDoc} 
        setTitle={setTitle}
        setContent={setContent}
        isEditMode={activeDocIndex !== null}
      />
    </div>
  );
}