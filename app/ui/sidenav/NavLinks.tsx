import { Home, Files, UserRound } from "lucide-react";

import styles from "@/app/styles/NavLinks.module.css";
import NavItem from "./NavItem";
import Tooltip from "./Tooltip";

export default function NavLinks() {
  return (
    <>
      <Tooltip text="Home">
        <NavItem href="/">
          <Home className={styles.icon} />
        </NavItem>
      </Tooltip>

      <Tooltip text="Workspaces">
        <NavItem href="/workspaces">
          <Files className={styles.icon} />
        </NavItem>
      </Tooltip>

      <Tooltip text="Sign In">
        <NavItem href="/signin">
          <UserRound className={styles.icon} />
        </NavItem>
      </Tooltip>
    </>
  );
}
