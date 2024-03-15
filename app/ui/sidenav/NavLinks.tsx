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
      <Tooltip text="Home">
        <NavItem href="/" label="Home" icon={faHome} />
      </Tooltip>

      <Tooltip text="Workspaces">
        <NavItem href="/workspaces" label="Workspaces" icon={faFolderClosed} />
      </Tooltip>

      <Tooltip text="Sign In">
        <NavItem href="/signin" label="Sign In" icon={faCircleUser} />
      </Tooltip>
    </>
  );
}
