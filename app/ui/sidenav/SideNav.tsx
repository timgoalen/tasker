"use client";
import { useState } from "react";

import { ChevronsDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/app/styles/SideNav.module.css";
import NavLinks from "./NavLinks";

export default function SideNav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  function toggleSideNav() {
    setIsSideNavOpen(!isSideNavOpen);
  }

  return (
    <>
      {/* Hamburger icon */}
      <button
        className={styles.icon}
        onMouseEnter={() => setIsSideNavOpen(true)}
        onMouseLeave={() => setIsSideNavOpen(false)}
        onClick={toggleSideNav}
      >
        {isSideNavOpen ? <ChevronsDown /> : <Menu />}
      </button>

      {/* Nav Bar */}
      <AnimatePresence>
        {isSideNavOpen && (
          <motion.nav
            className={styles.sideBar}
            key="sideNav"
            transition={{ duration: 0.15 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            onMouseEnter={() => setIsSideNavOpen(true)}
            onMouseLeave={() => setIsSideNavOpen(false)}
          >
            <NavLinks />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
