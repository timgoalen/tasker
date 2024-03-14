import NavItem from "./NavItem";
import Tooltip from "./Tooltip";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faFolderClosed,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";

export default function NavLinks() {
  return (
    <>
      <Tooltip text="home">
        <NavItem href="/" label="Home" icon={faHome} />
      </Tooltip>
      <NavItem href="/workspaces" label="Workspaces" icon={faFolderClosed} />
      <NavItem href="/signin" label="Sign In" icon={faCircleUser} />
    </>
  );
}
