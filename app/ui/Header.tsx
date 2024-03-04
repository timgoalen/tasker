import { openSans } from "@/app/ui/fonts";

export default function Header({ title }) {
  return (
    <header>
      <div
        className={`${openSans.className} antialiased header-left page-title`}
      >
        {title}
      </div>
      <div className="header-right"></div>
    </header>
  );
}
