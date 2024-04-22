"use client";

import { motion } from "framer-motion";
import { FolderPen, Trash } from "lucide-react";

import styles from "@/app/styles/WorkspaceToolBox.module.css";
import { deleteWorkspace } from "@/app/actions/workspaces";
import { EventEmitter } from "stream";
import { useState } from "react";

interface WorkspaceToolBoxProps {
  id: string;
}

export default function WorkspaceToolBox({ id }: WorkspaceToolBoxProps) {
  function deleteAction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTestText(true);
    console.log(`deleted workspace: ${id}`);
    // deleteWorkspace(id);
  }

  const [testText, setTestText] = useState(false);

  return (
    <motion.div
      className={styles.container}
      transition={{ duration: 0.05 }}
      initial={{ y: -30, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    >
      <div className={styles.tool}>
        <FolderPen size={16} />
        <div>Rename</div>
      </div>

      {/* <div className={styles.tool} onClick={() => removeWorkspace}>
        <Trash size={16} />
        <div>Delete</div>
      </div> */}

      <form onSubmit={() => deleteAction} className={styles.tool}>
        <Trash size={16} />
        <button type="submit">Delete</button>
      </form>

      {testText && <p>submitted</p>}
    </motion.div>
  );
}
