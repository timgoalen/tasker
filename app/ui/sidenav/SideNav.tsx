"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import styles from "@/app/styles/SideNav.module.css";
import NavLinks from "./NavLinks";

export default function SideNav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  return (
    <>
      {isSideNavOpen ? (
        // Open Side Nav
        <div 
        onMouseLeave={() => setIsSideNavOpen(false)}
        >
          <button className={styles.icon}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>

          <motion.nav
            className={styles.sideBar}
            transition={{ duration: 0.2 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <NavLinks />
          </motion.nav>
        </div>
      ) : (
        // Hamburger icon
        <button
          className={styles.icon}
          onMouseEnter={() => setIsSideNavOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </>
  );
}
