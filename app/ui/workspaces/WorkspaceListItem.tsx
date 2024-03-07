"use client";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import styles from "@/app/styles/WorkspaceListItem.module.css";
import WorkspaceToolBox from "./WorkspaceToolBox";
import useClickOutside from "@/app/hooks/useClickOutside";

export default function WorkspaceListItem() {
  const [showTools, setShowTools] = useState(false);
  const ref = useRef(null);

  function handleClickOutside() {
    setShowTools(false);
  }

  useClickOutside(ref, handleClickOutside);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faFolder} />
        </div>

        <div className={styles.title}>Workspace Title Goes Here</div>

        <div className={styles.date}>01/03/24</div>

        <div
          ref={ref}
          className={styles.options}
          onClick={() => setShowTools(true)}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>

        {showTools && <WorkspaceToolBox />}
      </div>
    </>
  );
}
