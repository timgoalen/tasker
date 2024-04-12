"use client";

import { useState, useRef } from "react";
import Link from "next/link";

import { format } from "date-fns";
import { File, EllipsisVertical } from "lucide-react";

import styles from "@/app/styles/WorkspaceListItem.module.css";
import WorkspaceToolBox from "./WorkspaceToolBox";
import useClickOutside from "@/app/hooks/useClickOutside";

interface Workspace {
  title: string;
  updatedOn: Date;
  id: number;
}

export default function WorkspaceListItem({ title, updatedOn, id }: Workspace) {
  const [showTools, setShowTools] = useState(false);
  const ref = useRef(null);
  const formattedDate = format(updatedOn, "MMM do yyyy");
  const directHref = `/document/${id}`;

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

        <Link href={directHref}>
          <div className={styles.title}>
            {title}
          </div>
        </Link>

        <div className={styles.date}>{formattedDate}</div>

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
