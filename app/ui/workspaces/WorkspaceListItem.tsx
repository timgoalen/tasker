"use client";
import { useState, useRef } from "react";

import { File, EllipsisVertical } from "lucide-react";

import styles from "@/app/styles/WorkspaceListItem.module.css";
import WorkspaceToolBox from "./WorkspaceToolBox";
import useClickOutside from "@/app/hooks/useClickOutside";

interface Workspace {
  title: string;
  updatedOn: Date;
}

export default function WorkspaceListItem({ title, updatedOn }: Workspace) {
  const [showTools, setShowTools] = useState(false);
  const ref = useRef(null);

  function toggleVisibility() {
    setShowTools(!showTools);
  }

  function handleClickOutside() {
    setShowTools(false);
  }

  useClickOutside(ref, handleClickOutside);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <File />
        </div>

        <div className={styles.title}>{title}</div>

        <div className={styles.date}>{updatedOn.toString()}</div>

        <div ref={ref} className={styles.options} onClick={toggleVisibility}>
          <EllipsisVertical
            className={
              showTools ? "rotate-initial rotate-90" : "rotate-initial"
            }
            size={16}
          />
        </div>

        {showTools && <WorkspaceToolBox />}
      </div>
    </>
  );
}
