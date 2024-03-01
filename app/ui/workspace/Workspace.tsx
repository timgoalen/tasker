"use client";

import { useState } from "react";

export default function Workspace() {
  const [blocks, setBlocks] = useState([
    { element: "h1", content: "things to do" },
    { element: "p", content: "bounce Eddie's stems" },
  ]);

  return (
    <section>
      {blocks.map((block) => (
        <p contentEditable="true">- {block.content}</p>
      ))}
    </section>
  );
}
