import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
    </nav>
  );
};
export default NavBar;
