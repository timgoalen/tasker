import { openSans } from "@/app/ui/fonts";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
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
