import { openSans } from "@/app/ui/fonts";

import SideNav from "./SideNav";

export default function Dashboard() {
  return (
    <section className="dashboard-container">
      <div className={`${openSans.className} antialiased site-title`}>tasker</div>
      <SideNav />
    </section>
  );
}
