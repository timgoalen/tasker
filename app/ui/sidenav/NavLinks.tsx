import NavItem from "./NavItem";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFolderClosed, faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function NavLinks() {
  return (
    <>
      <NavItem href="/" label="Home" icon={faHome} />
      <NavItem href="/workspaces" label="Workspaces" icon={faFolderClosed} />
      <NavItem href="/signin" label="Sign In" icon={faCircleUser} />
    </>
  );
}
