export default function Header({ title }) {
  return (
    <header>
      <div className="header-left page-title">{title}</div>
      <div className="header-right"></div>
    </header>
  );
}
