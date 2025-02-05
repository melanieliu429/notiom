"use client";
import Image from "next/image";

export default function Nav({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="nav">
      <div className="logo">
        <Image src="/logo.svg" alt="Logo" height={48} width={48} />
        <h2>Notiom</h2>
      </div>
      <button onClick={onCreate}>Create</button>
    </div>
  );
}