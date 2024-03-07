"use client";
import { useState } from "react";

import { openSans } from "@/app/ui/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import styles from "@/app/styles/Dashboard.module.css";
import SideNav from "./SideNav";

export default function Dashboard() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <>
      {isDashboardOpen ? (
        <div onMouseLeave={() => setIsDashboardOpen(false)}>
          <button className={styles.icon}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>

          <motion.section
            className="dashboard-container"
            transition={{ duration: 0.2 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className={`${openSans.className} antialiased site-title`}>
              tasker
            </div>

            <SideNav />
          </motion.section>
        </div>
      ) : (
        <button
          className={styles.icon}
          onMouseEnter={() => setIsDashboardOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </>
  );
}
