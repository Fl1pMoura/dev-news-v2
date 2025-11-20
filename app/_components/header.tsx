import NavLink from "./nav-link";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-semibold text-2xl">Dev News</h1>
      <nav className="flex gap-6 ">
        <NavLink href="/">Blog</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/newsletter">Newsletter</NavLink>
      </nav>
    </header>
  );
};

export default Header;
