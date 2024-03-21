"use client";
import { useState, useRef } from "react";

import { File, EllipsisVertical } from "lucide-react";

import styles from "@/app/styles/WorkspaceListItem.module.css";
import WorkspaceToolBox from "./WorkspaceToolBox";
import useClickOutside from "@/app/hooks/useClickOutside";

export default function WorkspaceListItem() {
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

        <div className={styles.title}>Workspace Title Goes Here</div>

        <div className={styles.date}>01/03/24</div>

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
